"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import {
  JUPITER_CHANNEL_AVERAGE_VIEWS,
  JUPITER_FEATURED_LIFT,
  JUPITER_VIDEOS,
} from "@/data/jupiter-youtube"

const tags = [
  { label: "Video Content" },
  { label: "User Onboarding" },
  { label: "Jupiter Uplink" },
]

// Jupiter brand colors: cyan #00BEF0 / lime #C7F284
const tagStyle = "bg-[#00BEF0]/10 border-[#00BEF0]/20 text-[#0086A8]"

const viewFormatter = new Intl.NumberFormat("en-US")
const liftFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 })

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
              Onboarding videos for the Jupiter Uplink program, made to turn viewers into users
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
              Step-by-step tutorials for Jupiter&apos;s products, from perps and liquidity pools to JupSOL
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 border-y border-black/[0.08] py-5 sm:py-6"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-black/35">
                Performance benchmark
              </p>
              <p className="mt-3 text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-tight">
                Featured Uplink videos average{" "}
                <span className="text-[#FF0000]">{liftFormatter.format(JUPITER_FEATURED_LIFT)}x</span> the channel average
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
                <div>
                  <p className="text-sm sm:text-base text-black/40">Jupiter Onchain average</p>
                  <p className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-black/65">
                    {viewFormatter.format(JUPITER_CHANNEL_AVERAGE_VIEWS)} views
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                    See how the videos performed below.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {JUPITER_VIDEOS.map((video, index) => (
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
                  <p className="mt-3 text-sm sm:text-base font-semibold text-black/45">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#FF0000]">
                      {viewFormatter.format(video.views)}
                    </span>{" "}
                    views
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FF0000]/80">
                    {liftFormatter.format(video.views / JUPITER_CHANNEL_AVERAGE_VIEWS)}x channel average
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.15]">
              Want video content that turns viewers into users?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              Tutorials work because nobody reads docs. Book a call and we&apos;ll map out a series for your product.
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
