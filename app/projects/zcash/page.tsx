"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { TweetEmbed } from "@/components/tweet-embed"
import PulsatingDots from "@/components/pulsating-dots"

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
        // Check if all iframes have actual content (height > 0)
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
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <PulsatingDots />
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 text-sm font-medium text-yellow-600">
                Animations
              </span>
              <span className="px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-orange-600">
                Motion Design
              </span>
              <span className="px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm font-medium text-amber-600">
                Social Content
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">ZCASH</h1>

            <p className="text-xl md:text-2xl text-black/60 mb-8 leading-relaxed">
              Bringing privacy-first blockchain to life through engaging animations and social content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Work</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Zcash is pioneering privacy technology in blockchain. We partnered with the Zcash team to create
                engaging animations and social content that makes privacy-preserving technology accessible and
                understandable for a broader audience.
              </p>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Our work focused on visual storytelling that captures attention while educating viewers about the
                importance of financial privacy. Through creative motion design and compelling narratives, we helped
                Zcash communicate complex cryptographic concepts in an engaging way.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                The result was a collection of shareable content that drives awareness, builds understanding, and
                positions Zcash as a leader in privacy-preserving blockchain technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-yellow-50/30 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              See how our animations bring Zcash's privacy mission to life
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left: Featured tweet with constrained height on desktop only */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:h-[800px] lg:overflow-hidden bg-white rounded-3xl border border-black/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="lg:h-full lg:overflow-y-auto">
                  <TweetEmbed tweetId={ZCASH_TWEET_IDS[0]} delay={0} />
                </div>
              </motion.div>

              {/* Right: 2x2 grid of remaining tweets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ZCASH_TWEET_IDS.slice(1).map((tweetId, index) => (
                  <motion.div
                    key={tweetId}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="lg:h-[392px] lg:overflow-hidden bg-white rounded-3xl border border-black/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="lg:h-full lg:overflow-y-auto">
                      <TweetEmbed tweetId={tweetId} delay={(index + 1) * 0.1} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-amber-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to bring your vision to life?</h2>
            <p className="text-xl text-black/60 mb-10">
              Let's create compelling animations and content that captures attention and communicates your unique value
              proposition.
            </p>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  ;(window as any).Calendly.initPopupWidget({
                    url: "https://calendly.com/seb-thecommunication/30min",
                  })
                }
              }}
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-colors text-lg font-medium cursor-pointer"
            >
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
