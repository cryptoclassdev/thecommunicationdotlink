"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { VideoPlayer } from "@/components/ui/video-player"

export default function MeteoraProject() {
  const videos = [
    {
      id: "RAzVMn_Qt6k",
      title: "Meteora Overview",
      description: "Understanding Meteora's approach to DeFi",
    },
    {
      id: "DUbzVIG4gh8",
      title: "Liquidity Provisioning Guide",
      description: "How to provide liquidity on Meteora",
    },
    {
      id: "GF3ikHIpmAk",
      title: "Essential Strategies for Smart Investing",
      description: "Fundamental tips for smart investing in the Meteora ecosystem.",
    },
    {
      id: "4r93clMGEg8",
      title: "Getting Started",
      description: "Your first steps with Meteora",
    },
    {
      id: "NaU3_J7dPpk",
      title: "Advanced Strategies",
      description: "Optimizing your liquidity positions",
    },
    {
      id: "NYcXHy4z9K4",
      title: "Meteora Ecosystem",
      description: "Exploring the Meteora platform",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none" />

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
              <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-medium text-cyan-600">
                Explainers
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-600">
                Onboarding
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-purple-600">
                Video Content
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">Meteora</h1>

            <p className="text-xl md:text-2xl text-black/60 mb-8 leading-relaxed">
              Helping users understand DLMMs and liquidity provisioning through clear, structured content
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
                Meteora is redefining DeFi liquidity on Solana with Dynamic Liquidity Market Makers (DLMMs). We
                partnered with Meteora to create educational content that makes complex liquidity concepts accessible to
                both new and experienced users.
              </p>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Our approach focused on breaking down sophisticated DeFi mechanics into clear, digestible explainers.
                Through structured onboarding content and video tutorials, we helped users understand how to effectively
                provide liquidity and navigate the Meteora platform.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                The result was a comprehensive content library that empowered users to engage confidently with Meteora's
                innovative liquidity solutions, driving platform adoption and user success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Library</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Explore our comprehensive video guides and explainers for Meteora
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VideoPlayer
                  thumbnailUrl={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  videoUrl={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.title}
                  description={video.description}
                  aspectRatio="16/9"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to educate your users?</h2>
            <p className="text-xl text-black/60 mb-10">
              Let's create clear, engaging content that helps your community understand and adopt your product.
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
