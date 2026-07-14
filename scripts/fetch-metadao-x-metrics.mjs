import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const USERNAME = "MetaDAOProject"
const BASELINE_QUERY = `from:${USERNAME} -is:retweet -is:reply`
const BASELINE_END_TIME = "2025-07-01T00:00:00Z"
const POST_READ_COST_USD = 0.005
const COUNTS_ALL_COST_USD = 0.01
const CREDIT_GUARDRAIL_USD = 5

const rootDir = process.cwd()
const tweetsFile = path.join(rootDir, "data", "metadao-tweets.ts")
const metricsFile = path.join(rootDir, "data", "metadao-x-metrics.ts")

function loadEnvFile(filePath) {
  return readFile(filePath, "utf8")
    .then((content) => {
      for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith("#")) continue

        const equalsIndex = trimmed.indexOf("=")
        if (equalsIndex === -1) continue

        const key = trimmed.slice(0, equalsIndex).trim()
        let value = trimmed.slice(equalsIndex + 1).trim()
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1)
        }

        if (!process.env[key]) process.env[key] = value
      }
    })
    .catch((error) => {
      if (error.code !== "ENOENT") throw error
    })
}

function getToken() {
  const token = process.env.X_BEARER_TOKEN
  if (!token) {
    throw new Error("Missing X_BEARER_TOKEN. Add it to .env.local first.")
  }
  return token
}

async function requestX(endpoint, params) {
  const url = new URL(endpoint, "https://api.x.com")
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value)
    }
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  const text = await response.text()
  const body = text ? JSON.parse(text) : {}

  if (!response.ok || body.errors) {
    const details = JSON.stringify(body.errors ?? body, null, 2)
    throw new Error(`X API request failed (${response.status}):\n${details}`)
  }

  return body
}

async function readPortfolioTweetIds() {
  const content = await readFile(tweetsFile, "utf8")
  return [...content.matchAll(/id:\s*"(\d+)"/g)].map((match) => match[1])
}

async function countBaselinePosts() {
  const body = await requestX("/2/tweets/counts/all", {
    query: BASELINE_QUERY,
    end_time: BASELINE_END_TIME,
    granularity: "day",
  })

  return (body.data ?? []).reduce((total, day) => total + day.tweet_count, 0)
}

async function fetchBaselinePosts() {
  const posts = []
  let nextToken

  do {
    const body = await requestX("/2/tweets/search/all", {
      query: BASELINE_QUERY,
      end_time: BASELINE_END_TIME,
      max_results: "100",
      sort_order: "recency",
      "tweet.fields": "created_at,public_metrics",
      next_token: nextToken,
    })

    posts.push(...(body.data ?? []))
    nextToken = body.meta?.next_token
  } while (nextToken)

  return posts
}

async function fetchPortfolioPosts(ids) {
  const posts = []

  for (let index = 0; index < ids.length; index += 100) {
    const batch = ids.slice(index, index + 100)
    const body = await requestX("/2/tweets", {
      ids: batch.join(","),
      "tweet.fields": "created_at,public_metrics",
    })

    posts.push(...(body.data ?? []))
  }

  return posts
}

function readMetric(post, key) {
  return post.public_metrics?.[key] ?? 0
}

function normalizePost(post) {
  return {
    id: post.id,
    createdAt: post.created_at,
    displayDate: formatDisplayDate(post.created_at),
    views: readMetric(post, "impression_count"),
    likes: readMetric(post, "like_count"),
    replies: readMetric(post, "reply_count"),
    retweets: readMetric(post, "retweet_count"),
    quotes: readMetric(post, "quote_count"),
    bookmarks: readMetric(post, "bookmark_count"),
  }
}

function summarize(posts) {
  const totals = posts.reduce(
    (acc, post) => {
      const metrics = normalizePost(post)
      acc.views += metrics.views
      acc.likes += metrics.likes
      acc.replies += metrics.replies
      acc.retweets += metrics.retweets
      acc.quotes += metrics.quotes
      acc.bookmarks += metrics.bookmarks
      return acc
    },
    {
      views: 0,
      likes: 0,
      replies: 0,
      retweets: 0,
      quotes: 0,
      bookmarks: 0,
    }
  )

  const publicEngagements =
    totals.likes + totals.replies + totals.retweets + totals.quotes + totals.bookmarks
  const postCount = posts.length

  return {
    postCount,
    totals: {
      ...totals,
      publicEngagements,
    },
    averages: averageMetrics({
      ...totals,
      publicEngagements,
    }, postCount),
  }
}

function averageMetrics(totals, count) {
  if (!count) {
    return {
      views: 0,
      likes: 0,
      replies: 0,
      retweets: 0,
      quotes: 0,
      bookmarks: 0,
      publicEngagements: 0,
    }
  }

  return Object.fromEntries(
    Object.entries(totals).map(([key, value]) => [key, Math.round(value / count)])
  )
}

function formatDisplayDate(value) {
  if (!value) return ""

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value))
}

function estimateCost(baselinePostCount, portfolioPostCount) {
  const postReads = baselinePostCount + portfolioPostCount
  const estimatedUsd = postReads * POST_READ_COST_USD + COUNTS_ALL_COST_USD

  return {
    baselinePostCount,
    portfolioPostCount,
    postReads,
    estimatedUsd,
  }
}

function formatUsd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)
}

function buildMetricsFile({ baselinePosts, portfolioPosts }) {
  const baselineSummary = summarize(baselinePosts)
  const portfolioSummary = summarize(portfolioPosts)
  const metricsById = Object.fromEntries(
    portfolioPosts.map((post) => {
      const metrics = normalizePost(post)
      return [
        metrics.id,
        {
          createdAt: metrics.createdAt,
          displayDate: metrics.displayDate,
          views: metrics.views,
          likes: metrics.likes,
          replies: metrics.replies,
          retweets: metrics.retweets,
          quotes: metrics.quotes,
          bookmarks: metrics.bookmarks,
        },
      ]
    })
  )

  return `// Generated by scripts/fetch-metadao-x-metrics.mjs.
// Run pnpm metrics:metadao:fetch to refresh these static numbers.

export interface XTweetMetrics {
  createdAt: string
  displayDate: string
  views: number
  likes: number
  replies: number
  retweets: number
  quotes: number
  bookmarks: number
}

export const METADAO_X_BASELINE = ${JSON.stringify(
    {
      username: USERNAME,
      query: BASELINE_QUERY,
      endTime: BASELINE_END_TIME,
      fetchedAt: new Date().toISOString(),
      ...baselineSummary,
    },
    null,
    2
  )} as const

export const METADAO_X_PORTFOLIO_SUMMARY = ${JSON.stringify(
    {
      username: USERNAME,
      fetchedAt: new Date().toISOString(),
      ...portfolioSummary,
    },
    null,
    2
  )} as const

export const METADAO_X_METRICS_BY_TWEET_ID: Record<string, XTweetMetrics> = ${JSON.stringify(
    metricsById,
    null,
    2
  )}
`
}

async function main() {
  await loadEnvFile(path.join(rootDir, ".env.local"))

  const command = process.argv[2] ?? "estimate"
  const portfolioTweetIds = await readPortfolioTweetIds()
  const baselinePostCount = await countBaselinePosts()
  const cost = estimateCost(baselinePostCount, portfolioTweetIds.length)

  console.log(`Baseline posts before ${BASELINE_END_TIME}: ${baselinePostCount}`)
  console.log(`Portfolio posts to refresh: ${portfolioTweetIds.length}`)
  console.log(`Estimated X API cost for fetch: ${formatUsd(cost.estimatedUsd)}`)

  if (command === "estimate") return

  if (command !== "fetch") {
    throw new Error(`Unknown command "${command}". Use "estimate" or "fetch".`)
  }

  if (cost.estimatedUsd > CREDIT_GUARDRAIL_USD && !process.argv.includes("--force")) {
    throw new Error(
      `Estimated cost is above ${formatUsd(CREDIT_GUARDRAIL_USD)}. Re-run with --force if intended.`
    )
  }

  const [baselinePosts, portfolioPosts] = await Promise.all([
    fetchBaselinePosts(),
    fetchPortfolioPosts(portfolioTweetIds),
  ])

  await mkdir(path.dirname(metricsFile), { recursive: true })
  await writeFile(metricsFile, buildMetricsFile({ baselinePosts, portfolioPosts }))

  console.log(`Wrote ${path.relative(rootDir, metricsFile)}`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
