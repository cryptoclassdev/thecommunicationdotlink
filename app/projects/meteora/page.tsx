"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { VideoPlayer } from "@/components/ui/video-player"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const tags = [
  { label: "Explainers", color: "cyan" },
  { label: "Onboarding", color: "blue" },
  { label: "Video Content", color: "purple" },
]

const tagColors = {
  cyan: "bg-cyan-50 border-cyan-100/80 text-cyan-600",
  blue: "bg-blue-50 border-blue-100/80 text-blue-600",
  purple: "bg-purple-50 border-purple-100/80 text-purple-600",
}

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

export default function MeteoraProject() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-50/50 rounded-full blur-[150px] pointer-events-none" />

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
                    tagColors[tag.color as keyof typeof tagColors]
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 sm:mb-6 tracking-tight">
              Meteora
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-black/50 leading-relaxed max-w-2xl">
              Helping users understand DLMMs and liquidity provisioning through clear, structured content
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
                Meteora is redefining DeFi liquidity on Solana with Dynamic Liquidity Market Makers (DLMMs). We
                partnered with Meteora to create educational content that makes complex liquidity concepts accessible to
                both new and experienced users.
              </p>
              <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                Our approach focused on breaking down sophisticated DeFi mechanics into clear, digestible explainers.
                Through structured onboarding content and video tutorials, we helped users understand how to effectively
                provide liquidity and navigate the Meteora platform.
              </p>
              <p className="text-base sm:text-lg text-black/60 leading-relaxed">
                The result was a comprehensive content library that empowered users to engage confidently with Meteora's
                innovative liquidity solutions, driving platform adoption and user success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-blue-50/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Content Library</h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
              Explore our comprehensive video guides and explainers for Meteora
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-white to-blue-50/40" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to educate your users?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
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
