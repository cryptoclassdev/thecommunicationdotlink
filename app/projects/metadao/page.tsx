"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CustomTweetCard } from "@/components/custom-tweet-card"
import { METADAO_TWEETS } from "@/data/metadao-tweets"
import { METADAO_X_BASELINE, METADAO_X_PORTFOLIO_SUMMARY } from "@/data/metadao-x-metrics"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const tags = [
  { label: "Content Strategy" },
  { label: "Social Media Marketing" },
  { label: "Community Growth" },
]

// MetaDAO brand color: #FF6B6B
const tagStyle = "bg-[#FF6B6B]/10 border-[#FF6B6B]/20 text-[#FF6B6B]"
const percentFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 })
const impressionIncreasePercent =
  METADAO_X_BASELINE.averages.views > 0
    ? ((METADAO_X_PORTFOLIO_SUMMARY.averages.views - METADAO_X_BASELINE.averages.views) /
        METADAO_X_BASELINE.averages.views) *
      100
    : 0

export default function MetaDAOProject() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-50/50 rounded-full blur-[150px] pointer-events-none" />

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
              MetaDAO
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-black/50 leading-relaxed max-w-2xl">
              MetaDAO runs governance through prediction markets. We made that understandable to people hearing about it for the first time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-cyan-50/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
              Community Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
              A sample of the posts from this work, and how people responded
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              "mb-8 sm:mb-10 p-5 sm:p-7 md:p-8",
              "rounded-lg border border-[#1D9BF0]/15",
              "bg-[#1D9BF0]/[0.035]"
            )}
          >
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">
                Average impressions went up by{" "}
                <span className="text-[#1D9BF0]">
                  {percentFormatter.format(impressionIncreasePercent)}%
                </span>
              </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {METADAO_TWEETS.map((tweet, index) => (
              <motion.div
                key={tweet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CustomTweetCard tweet={tweet} />
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
              Ready to grow your community and attract real users?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              If your product takes explaining, that's the work we do. Book a call and tell us what you're building.
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
