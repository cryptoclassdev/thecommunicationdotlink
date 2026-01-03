"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CustomTweetCard } from "@/components/custom-tweet-card"
import { METADAO_TWEETS } from "@/data/metadao-tweets"

export default function MetaDAOProject() {
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
                MetaDAO is exploring new models for decentralized governance on Solana. We worked with the MetaDAO team
                to help explain futarchy, on-chain decision making, and governance mechanics through clear explainers,
                animations, and ecosystem-focused content.
              </p>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Our work focused on making complex governance concepts understandable without oversimplifying them. By
                grounding abstract ideas in clear narratives and practical examples, we helped MetaDAO communicate what
                makes their approach different and why it matters.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                The outcome was clearer positioning, stronger understanding across the ecosystem, and content that
                helped both experienced crypto users and newcomers engage meaningfully with MetaDAO's vision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section with Custom Tweet Cards */}
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
            {METADAO_TWEETS.map((tweet) => (
              <CustomTweetCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
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
