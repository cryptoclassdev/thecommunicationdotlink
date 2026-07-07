"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const tags = [
  { label: "Video Content" },
  { label: "User Onboarding" },
  { label: "Jupiter Uplink" },
]

// Jupiter brand colors: cyan #00BEF0 / lime #C7F284
const tagStyle = "bg-[#00BEF0]/10 border-[#00BEF0]/20 text-[#0086A8]"

const videos = [
  { id: "qQ_VCRtKMdo", title: "How to Use DLMM Pools to Earn $ — Meteora Tutorial" },
  { id: "PzfVXXZcf2A", title: "How to Earn $ by Adding Liquidity — Raydium Tutorial" },
  { id: "rrXsN7-9RNI", title: "Follow Murad Mahmudov NOW or Miss This Next Bitcoin-Level Explosion" },
  { id: "cxld81X_9n0", title: "Withdrawing from Your Liquidity Pools — Raydium Tutorial" },
  { id: "GDYkDAIoaxU", title: "Multiply Your JLP APY With Kamino" },
  { id: "RNiSDyoEOxs", title: "Can You Master Leverage Trading with Jupiter Perps?" },
  { id: "-o1EMwUnJxA", title: "This Token's Price Keeps Going Up ..." },
  { id: "zzkA-znmJVU", title: "Why is JupSOL Token So Special?" },
]

export default function JupiterProject() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-50/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back link - Fitts's Law: adequate touch target */}
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
            {/* Tags - Miller's Law: chunked information */}
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

            {/* Title - Typography hierarchy */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 sm:mb-6 tracking-tight">
              Jupiter
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-black/50 leading-relaxed max-w-2xl">
              Creating onboarding videos as part of Jupiter Uplink — helping new users understand and use the
              Jupiter ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-emerald-50/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
              Onboarding Videos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
              Tutorials and explainers that walk new users through earning, trading, and staking across the
              Jupiter ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className={cn(
                  "overflow-hidden rounded-2xl",
                  "bg-white border border-black/[0.06]",
                  "hover:border-black/[0.1] hover:shadow-xl hover:shadow-black/[0.05]",
                  "transition-all duration-500"
                )}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-black leading-snug">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={cn(
              "inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5",
              "text-xs sm:text-sm font-medium border",
              tagStyle
            )}>
              YouTube
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 tracking-tight">
              Jupiter Onchain
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
              The full series lives on the Jupiter Onchain channel, where new videos continue to onboard users
              into the ecosystem.
            </p>
            <Link
              href="https://www.youtube.com/@JupiterOnchain"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2",
                "px-5 sm:px-6 py-2.5 sm:py-3",
                "bg-black text-white rounded-xl",
                "font-semibold text-sm sm:text-base",
                "hover:bg-black/90 active:scale-[0.98]",
                "transition-all duration-200",
                "shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2"
              )}
            >
              Visit Channel
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.15]">
              Want video content that turns viewers into users?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              Let&apos;s create tutorials and explainers that make your product easy to pick up and hard to put down.
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
