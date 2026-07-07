"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const tags = [
  { label: "Launch Communications" },
  { label: "Content Strategy" },
  { label: "Community Growth" },
]

// Zinc brand color: #FF7A1A
const tagStyle = "bg-[#FF7A1A]/10 border-[#FF7A1A]/20 text-[#E05E00]"

const stats = [
  { rank: "#1", label: "Arcium Computations", detail: "Most confidential compute of any program on the network" },
  { rank: "#3", label: "Revenue", detail: "App revenue across Solana" },
  { rank: "#2", label: "Holder Revenue", detail: "Revenue routed to holders" },
  { rank: "#20", label: "24h Volume", detail: "Trading volume on Meteora" },
  { rank: "~0.5%", label: "Network Share", detail: "Of all transactions on Solana" },
]

export default function ZincProject() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-orange-50/50 rounded-full blur-[150px] pointer-events-none" />

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
              Zinc.cash
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-black/50 leading-relaxed max-w-2xl">
              We ran communications for Zinc&apos;s launch on Solana. The first month went well.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Artwork Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden border border-black/[0.06] shadow-xl shadow-black/[0.05]"
          >
            <Image
              src="/work/zinc-miners.jpg"
              alt="Zinc community miners artwork"
              width={1080}
              height={1080}
              className="w-full h-auto"
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* First-Month Results Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-amber-50/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
              The First Month
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
              Zinc launched, and a month later the numbers looked like this. Rankings are across all of Solana,
              trailing 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Rankings infographic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl sm:rounded-3xl overflow-hidden border border-black/[0.06] shadow-xl shadow-black/[0.05]"
            >
              <Image
                src="/work/zinc-rankings.jpg"
                alt="Where Zinc ranked across Solana one month after launch"
                width={1080}
                height={1080}
                className="w-full h-auto"
                unoptimized
              />
            </motion.div>

            {/* Stat cards */}
            <div className="space-y-3 sm:space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className={cn(
                    "flex items-center gap-4 sm:gap-5 p-4 sm:p-5",
                    "bg-white rounded-xl sm:rounded-2xl",
                    "border border-black/[0.06]",
                    "hover:border-[#FF7A1A]/30 hover:shadow-lg hover:shadow-[#FF7A1A]/[0.06]",
                    "transition-all duration-300"
                  )}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-[#E05E00] w-20 sm:w-24 flex-shrink-0">
                    {stat.rank}
                  </span>
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-black">{stat.label}</div>
                    <div className="text-xs sm:text-sm text-black/50">{stat.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* zinc.cash Section */}
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
              Website
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 tracking-tight">
              zinc.cash
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
              Zinc runs confidential compute on Solana and routes revenue back to holders. The site has the details.
            </p>
            <Link
              href="https://zinc.cash"
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
              Visit Website
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
              Launching something new?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              A launch gets one first impression. Talk to us before the date is set, not after.
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
