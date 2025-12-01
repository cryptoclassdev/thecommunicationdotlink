"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function JupiterProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none" />

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
              <span className="px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-purple-600">
                Video Content
              </span>
              <span className="px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-sm font-medium text-pink-600">
                Community Growth
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-medium text-indigo-600">
                Brand Strategy
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">Jupiter</h1>

            <p className="text-xl md:text-2xl text-black/60 mb-8 leading-relaxed">
              Amplifying Solana's leading DEX aggregator through compelling video content and strategic storytelling
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
                Jupiter is the most popular DEX aggregator on Solana, connecting users to the best swap routes across
                the ecosystem. We partnered with Jupiter to create engaging video content that showcases their
                platform's power and educates the community.
              </p>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Our video strategy focused on making DeFi accessible through clear, visually compelling narratives. From
                product demonstrations to community highlights, each piece of content was crafted to strengthen
                Jupiter's position as the go-to platform for Solana swaps.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                Through consistent, high-quality video production, we helped Jupiter build stronger connections with
                their community while attracting new users to the platform. The content drives awareness, education, and
                engagement across multiple channels.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-pink-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Engaging video content that drives community growth and user education
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-black/10 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/zzkA-znmJVU?si=lNV7zG11ezU1T2Rw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-black/10 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GDYkDAIoaxU?si=xSM61RjTHbtCGFVJ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-black/10 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Eyxb5CFGCtI?si=e_GQauapqFzG0x4K"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-black/10 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qJ-qBqKULew?si=535pnSYJbNMZBbMc"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to tell your story?</h2>
            <p className="text-xl text-black/60 mb-10">
              Let's create compelling video content that resonates with your audience and drives real results for your
              platform.
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
