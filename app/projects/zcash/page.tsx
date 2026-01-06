"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { TweetEmbed } from "@/components/tweet-embed"
import { Loader } from "@/components/ui/loader"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const tags = [
  { label: "Animations" },
  { label: "Motion Design" },
  { label: "Social Content" },
]

// ZCASH brand color: #6B7280
const tagStyle = "bg-[#6B7280]/10 border-[#6B7280]/20 text-[#6B7280]"

const ZCASH_TWEET_IDS = [
  "2003570900545982505",
  "1996625311862309011",
  "1983963042590421496",
  "1991346316614795435",
  "1994975484288139511",
]

export default function ZcashProject() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    const checkTweetsRendered = setInterval(() => {
      const tweetIframes = document.querySelectorAll('iframe[id^="twitter-widget"]')

      if (tweetIframes.length >= ZCASH_TWEET_IDS.length) {
        let allRendered = true
        tweetIframes.forEach((iframe) => {
          const height = (iframe as HTMLIFrameElement).offsetHeight
          if (height === 0) {
            allRendered = false
          }
        })

        if (allRendered) {
          setIsLoading(false)
          clearInterval(checkTweetsRendered)
        }
      }
    }, 500)

    const timeout = setTimeout(() => {
      setIsLoading(false)
      clearInterval(checkTweetsRendered)
    }, 20000)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      clearInterval(checkTweetsRendered)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-10"
          >
            <Link
              href="/#work"
              className={cn(
                "inline-flex items-center gap-2 py-2 -ml-2 pl-2 pr-4",
                "text-sm sm:text-base text-black/50 hover:text-black",
                "transition-colors duration-200 group rounded-lg"
              )}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full",
                    "text-xs sm:text-sm font-medium border",
                    tagStyle
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 sm:mb-6 tracking-tight">
              ZCASH
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-black/50 leading-relaxed max-w-2xl">
              Bringing privacy-first blockchain to life through engaging animations and social content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 tracking-tight">Our Work</h2>
            <div className="space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                ZCASH is pioneering privacy technology in blockchain. We partnered with the team to create
                engaging animations and social content that makes privacy-preserving technology accessible and
                understandable for a broader audience.
              </p>
              <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                Our work focused on visual storytelling that captures attention while educating viewers about the
                importance of financial privacy. Through creative motion design and compelling narratives, we helped
                ZCASH communicate complex cryptographic concepts in an engaging way.
              </p>
              <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                The result was a collection of shareable content that drives awareness, builds understanding, and
                positions ZCASH as a leader in privacy-preserving blockchain technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Featured Content</h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
              See how our animations bring ZCASH's privacy mission to life
            </p>
          </motion.div>

          <div className="relative">
            {/* Loader - shown while tweets are loading */}
            {isLoading && (
              <div
                className={cn(
                  "absolute inset-0 z-10 flex items-center justify-center",
                  "bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl"
                )}
              >
                <Loader
                  texts={[
                    "Fetching from the bird site...",
                    "Still waiting...",
                    "Elon pls",
                    "Any day now",
                    "🦆",
                  ]}
                  intervalMs={2500}
                />
              </div>
            )}

            {/* Tweets Grid - always rendered, fades in when loaded */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0.3 : 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start"
            >
              {/* Left: Featured tweet */}
              <div
                className={cn(
                  "lg:h-[800px] lg:overflow-hidden",
                  "bg-white rounded-2xl sm:rounded-3xl",
                  "border border-black/[0.06]",
                  "shadow-sm hover:shadow-lg transition-shadow duration-300"
                )}
              >
                <div className="lg:h-full lg:overflow-y-auto">
                  <TweetEmbed tweetId={ZCASH_TWEET_IDS[0]} delay={0} />
                </div>
              </div>

              {/* Right: 2x2 grid of remaining tweets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {ZCASH_TWEET_IDS.slice(1).map((tweetId, index) => (
                  <div
                    key={tweetId}
                    className={cn(
                      "lg:h-[392px] lg:overflow-hidden",
                      "bg-white rounded-2xl sm:rounded-3xl",
                      "border border-black/[0.06]",
                      "shadow-sm hover:shadow-lg transition-shadow duration-300"
                    )}
                  >
                    <div className="lg:h-full lg:overflow-y-auto">
                      <TweetEmbed tweetId={tweetId} delay={(index + 1) * 0.1} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to bring your vision to life?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              Let's create compelling animations and content that captures attention and communicates your unique value proposition.
            </p>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  ;(window as any).Calendly.initPopupWidget({
                    url: "https://calendly.com/seb-thecommunication/30min",
                  })
                }
              }}
              className={cn(
                "inline-flex items-center justify-center",
                "px-6 sm:px-8 py-3 sm:py-4",
                "bg-black text-white rounded-xl sm:rounded-2xl",
                "font-semibold text-base sm:text-lg",
                "hover:bg-black/90 active:scale-[0.98]",
                "transition-all duration-200",
                "shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15",
                "cursor-pointer",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-4"
              )}
            >
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
