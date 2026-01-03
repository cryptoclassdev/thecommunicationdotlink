import { TweetCardClient } from "@/components/magicui/tweet-card-client"
import MetaDAOClient from "./metadao-client"

const METADAO_TWEET_IDS = [
  "1948822243896877403",
  "1951017233922269491",
  "1953804344983502976",
  "1956023221545001212",
  "1958672887117742217",
  "1961134346942963935",
  "1963665540838211884",
  "1966219386991378932",
  "1968753291254521897",
  "1971645084736045448",
  "1973826339435393470",
  "1976364501088796746",
  "1978906017812369891",
  "1981442070062694695",
  "1983975628803051689",
]

export default function MetaDAOProject() {
  return (
    <div className="min-h-screen bg-white">
      <MetaDAOClient />

      {/* Social Proof Section with Client-Side Rendered Tweets */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              See how our content strategy drives engagement and builds community
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METADAO_TWEET_IDS.map((tweetId) => (
              <TweetCardClient key={tweetId} id={tweetId} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
