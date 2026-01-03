"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Quote } from "lucide-react"
import { useEffect, useState } from "react"
import PulsatingDots from "@/components/pulsating-dots"
import { Footer } from "@/components/footer"

export default function MetaDAOProject() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    const checkTweetsLoaded = setInterval(() => {
      const twitterIframes = document.querySelectorAll('iframe[id^="twitter-widget"]')
      const loadedIframes = Array.from(twitterIframes).filter(
        (iframe) => (iframe as HTMLIFrameElement).offsetHeight > 0,
      )

      if (loadedIframes.length === 4) {
        setIsLoading(false)
        clearInterval(checkTweetsLoaded)
      }
    }, 500)

    const timeout = setTimeout(() => {
      setIsLoading(false)
      clearInterval(checkTweetsLoaded)
    }, 15000)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      clearInterval(checkTweetsLoaded)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <PulsatingDots color="black" />
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-cyan-100/20 rounded-full blur-[150px] pointer-events-none" />

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
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-700">
                Explainers
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-sm font-medium text-purple-700">
                Animations
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-sm font-medium text-cyan-700">
                Educational Content
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight bg-gradient-to-br from-black via-black/90 to-black/70 bg-clip-text text-transparent">
              MetaDAO
            </h1>

            <p className="text-xl md:text-2xl text-black/70 mb-8 leading-relaxed max-w-3xl">
              Making futarchy and on-chain governance legible through clear communication and engaging content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seb's Review Section - Styled as a Quote */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 md:-left-8 opacity-10">
                <Quote className="w-16 h-16 md:w-24 md:h-24 text-blue-600" />
              </div>

              {/* Quote Content */}
              <div className="relative bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-white border-l-4 border-blue-600 rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8 font-light italic">
                  I've known Kollan for many years, and MetaDAO has always been one of the most challenging projects
                  in crypto to communicate clearly. The challenge isn't marketing, it's depth. MetaDAO is building
                  governance around futarchy and on-chain decision making driven by markets and incentives, ideas that
                  are unfamiliar even to experienced crypto users.
                </p>
                <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8 font-light italic">
                  Our work focused on making this legible through clear explainers and educational content, supported
                  by an animation series that ran as an awareness campaign across Crypto Twitter to surface the ideas
                  and spark curiosity.
                </p>
                <p className="text-lg md:text-xl text-black/80 leading-relaxed mb-8 font-light italic">
                  As the product matured, MetaDAO emerged as one of the few projects in 2025 to gain attention for
                  shipping real infrastructure, with growing interest from teams exploring launches through its
                  framework.
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                  <div>
                    <p className="font-semibold text-lg text-black">Seb</p>
                    <p className="text-sm text-black/60">Founder, thecommunication.link</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              See how our content brings complex governance concepts to life
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-black/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Living in the Futarchy <a href="https://t.co/nTJCPR3uiI">pic.twitter.com/nTJCPR3uiI</a>
                </p>
                &mdash; MetaDAO (@MetaDAOProject){" "}
                <a href="https://twitter.com/MetaDAOProject/status/1983975628803051689?ref_src=twsrc%5Etfw">
                  October 30, 2025
                </a>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-black/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  The Halloween Special <a href="https://t.co/T3xLpyGqmP">pic.twitter.com/T3xLpyGqmP</a>
                </p>
                &mdash; MetaDAO (@MetaDAOProject){" "}
                <a href="https://twitter.com/MetaDAOProject/status/1981442070062694695?ref_src=twsrc%5Etfw">
                  October 23, 2025
                </a>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-black/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Being a Celebrity <a href="https://t.co/AogqNkSQeL">pic.twitter.com/AogqNkSQeL</a>
                </p>
                &mdash; MetaDAO (@MetaDAOProject){" "}
                <a href="https://twitter.com/MetaDAOProject/status/1978906017812369891?ref_src=twsrc%5Etfw">
                  October 16, 2025
                </a>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl border border-black/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  The Trading Bot <a href="https://t.co/pMly1dZsmO">pic.twitter.com/pMly1dZsmO</a>
                </p>
                &mdash; MetaDAO (@MetaDAOProject){" "}
                <a href="https://twitter.com/MetaDAOProject/status/1976364501088796746?ref_src=twsrc%5Etfw">
                  October 9, 2025
                </a>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to make your vision understood?
            </h2>
            <p className="text-xl text-black/60 mb-10 leading-relaxed">
              Let's create content that turns complexity into clarity and drives real adoption
            </p>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  ;(window as any).Calendly.initPopupWidget({
                    url: "https://calendly.com/seb-thecommunication/30min",
                  })
                }
              }}
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 hover:scale-105 transition-all duration-300 text-lg font-medium cursor-pointer shadow-lg hover:shadow-xl"
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
