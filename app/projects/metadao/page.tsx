"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function MetaDAOProject() {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.onload = () => {
      // Trigger Twitter to process the embedded tweets after script loads
      if ((window as any).twttr?.widgets) {
        ;(window as any).twttr.widgets.load()
      }
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const tweets = [
    "https://x.com/MetaDAOProject/status/1983975628803051689",
    "https://x.com/MetaDAOProject/status/1981442070062694695",
    "https://x.com/MetaDAOProject/status/1978906017812369891",
    "https://x.com/MetaDAOProject/status/1976364501088796746",
    "https://x.com/MetaDAOProject/status/1973826339435393470",
    "https://x.com/MetaDAOProject/status/1971645084736045448",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

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
              <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600">
                Content Strategy
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-medium text-cyan-600">
                Social Media Marketing
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-purple-600">
                Community Growth
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">MetaDAO</h1>

            <p className="text-xl md:text-2xl text-black/60 mb-8 leading-relaxed">
              Elevating Web3 governance through strategic content and community engagement
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
                MetaDAO is pioneering the future of decentralized governance on Solana. We partnered with them to
                amplify their vision through strategic content creation, community management, and social media
                marketing.
              </p>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Our approach focused on translating complex Web3 concepts into engaging, accessible content that
                resonates with both crypto natives and newcomers. Through consistent storytelling and community
                engagement, we helped MetaDAO establish thought leadership in the DAO space.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                The results speak for themselves—increased community engagement, stronger brand presence, and a growing
                ecosystem of passionate contributors who believe in the future of decentralized decision-making.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              See how our content strategy drives engagement and builds community
            </p>
          </motion.div>

          {/* Masonry-style Tweet Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tweets.map((tweetUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    ${index === 0 ? "lg:col-span-2" : ""}
                    ${index === 3 ? "lg:col-span-2" : ""}
                  `}
                >
                  <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
                      <a href={tweetUrl}>Loading tweet...</a>
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to grow your community?</h2>
            <p className="text-xl text-black/60 mb-10">
              Let's create a content strategy that drives real engagement and builds lasting relationships with your
              audience.
            </p>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  ;(window as any).Calendly.initPopupWidget({
                    url: "https://calendly.com/seb-thecommunication/30min",
                  })
                }
              }}
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-colors text-lg font-medium"
            >
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
