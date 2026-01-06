"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Quote, ExternalLink } from "lucide-react"
import { CustomTweetCard } from "@/components/custom-tweet-card"
import { METADAO_TWEETS } from "@/data/metadao-tweets"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SafariMockup } from "@/components/ui/safari-mockup"
import { IPhoneMockup } from "@/components/ui/iphone-mockup"
import { cn } from "@/lib/utils"

const tags = [
  { label: "Content Strategy" },
  { label: "Social Media Marketing" },
  { label: "Community Growth" },
]

// MetaDAO brand color: #FF6B6B
const tagStyle = "bg-[#FF6B6B]/10 border-[#FF6B6B]/20 text-[#FF6B6B]"

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
              Elevating Web3 governance through strategic content and community engagement
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
              See how our content strategy drives engagement and builds community
            </p>
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

      {/* metadao.link Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-purple-50/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <span className={cn(
                "inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5",
                "text-xs sm:text-sm font-medium border",
                "bg-purple-50 border-purple-100/80 text-purple-600"
              )}>
                Website
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 tracking-tight">
                metadao.link
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-black/50 leading-relaxed mb-6 sm:mb-8">
                We designed and built a dedicated landing page to explain MetaDAO&apos;s futarchy-based governance system
                in clear, accessible terms. The site serves as a central hub for new users to understand the project&apos;s
                unique approach to on-chain decision making.
              </p>
              <Link
                href="https://metadao.link"
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

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              {/* Desktop: Safari mockup */}
              <div className="hidden sm:block">
                <SafariMockup
                  image="https://res.cloudinary.com/di6zkr8of/image/upload/v1767732340/metadao-hub-screenshot_jap2ng.png"
                  className="w-full"
                />
              </div>

              {/* Mobile: iPhone mockup */}
              <div className="flex justify-center sm:hidden">
                <IPhoneMockup scale={0.65}>
                  <Image
                    src="https://res.cloudinary.com/di6zkr8of/image/upload/v1764583245/metadao-link-mobile_preview.png"
                    alt="metadao.link mobile preview"
                    fill
                    className="object-cover object-top"
                  />
                </IPhoneMockup>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-4 md:-left-6">
                <Quote className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-100 fill-blue-100" />
              </div>

              {/* Testimonial Content */}
              <div className={cn(
                "relative p-6 sm:p-8 md:p-10 lg:p-12",
                "bg-gradient-to-br from-blue-50/40 to-cyan-50/40",
                "rounded-2xl sm:rounded-3xl",
                "border border-blue-100/40"
              )}>
                <blockquote className="text-base sm:text-lg md:text-xl text-black/70 leading-relaxed mb-6 sm:mb-8">
                  I've known Kollan for many years, and MetaDAO has always been one of the most challenging projects in
                  crypto to communicate clearly. The challenge isn't marketing, it's depth. MetaDAO is building
                  governance around futarchy and on-chain decision making driven by markets and incentives, ideas that
                  are unfamiliar even to experienced crypto users. Our work focused on making this legible through clear
                  explainers and educational content, supported by an animation series that ran as an awareness campaign
                  across Crypto Twitter to surface the ideas and spark curiosity. As the product matured, MetaDAO
                  emerged as one of the few projects in 2025 to gain attention for shipping real infrastructure, with
                  growing interest from teams exploring launches through its framework.
                </blockquote>

                {/* Author - Law of Proximity: grouped elements */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative flex-shrink-0 border border-black/[0.06]">
                    <Image
                      src="https://res.cloudinary.com/di6zkr8of/image/upload/v1764583245/seb-pfp_bs2cit.png"
                      alt="Sebastian Montgomery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg text-black">Sebastian Montgomery</div>
                    <div className="text-sm sm:text-base text-black/50">Founder, thecommunication.link</div>
                  </div>
                </div>
              </div>
            </div>
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
              Ready to grow your community and attract real users?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              Let's create a content strategy that drives real engagement and builds lasting relationships with your audience.
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
