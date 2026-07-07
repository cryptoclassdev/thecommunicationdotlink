"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import { ASSETS } from "@/lib/assets"

const teamMembers = [
  {
    name: "Sebastian Montgomery",
    role: "Founder",
    image: ASSETS.team.seb,
    bio: "Seb has produced more than 1,000 videos explaining Solana and the projects built on it. He started thecommunication.link to do that work for teams directly.",
    accent: "blue",
  },
  {
    name: "Chris",
    role: "Lead Researcher",
    image: ASSETS.team.chris,
    bio: "Steers our content research, breaking Solana updates into plain, useful takeaways.",
    accent: "purple",
  },
  {
    name: "Pedro",
    role: "Lead Editor & Artist",
    image: ASSETS.team.pedro,
    bio: "Pedro runs creative production. He decides how a piece should look before it ships, and most of what you see on our channels passed through his hands first.",
    accent: "indigo",
  },
  {
    name: "Bruno",
    role: "Content Creator",
    image: ASSETS.team.bruno,
    bio: "Bruno is a graphic designer who also edits video and makes social content. Good eye, quick turnaround, comfortable moving between formats.",
    accent: "pink",
  },
  {
    name: "Nicole",
    role: "BD Lead",
    image: ASSETS.team.nicole,
    bio: "Nicole leads business development. She's crypto native, and her specialty is expansion: finding the deals and partnerships that grow what you're building.",
    accent: "indigo",
  },
  {
    name: "Tyler",
    role: "Market Researcher",
    image: ASSETS.team.tyler,
    bio: "Tyler follows the markets full time and does the technical analysis. If something moved overnight, he knows why by morning.",
    accent: "blue",
  },
  {
    name: "Sublime",
    role: "Developer",
    image: ASSETS.team.sublime,
    bio: "Sublime is our developer. Sites, tools, whatever the work calls for, Sublime builds it and keeps it running.",
    accent: "purple",
  },
]

const accentColors = {
  blue: "from-blue-400/10 to-blue-600/10",
  purple: "from-purple-400/10 to-purple-600/10",
  indigo: "from-indigo-400/10 to-indigo-600/10",
  pink: "from-pink-400/10 to-pink-600/10",
}

const accentBorders = {
  blue: "border-blue-500/20",
  purple: "border-purple-500/20",
  indigo: "border-indigo-500/20",
  pink: "border-pink-500/20",
}

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={cn(
        "group flex flex-col gap-6 sm:gap-8 md:gap-10 items-center",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Image Section */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className={cn(
          "relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-black/[0.02] to-black/[0.04]",
          "border border-black/[0.06]"
        )}>
          {/* Hover gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100",
              "transition-opacity duration-500 z-10",
              accentColors[member.accent as keyof typeof accentColors]
            )}
          />
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content Section - Law of Proximity: grouped information */}
      <div className={cn(
        "w-full md:w-3/5",
        isEven ? "md:pl-4 lg:pl-8" : "md:pr-4 lg:pr-8"
      )}>
        <div className="space-y-3 sm:space-y-4">
          {/* Role badge */}
          <span
            className={cn(
              "inline-block text-xs font-semibold uppercase tracking-wider",
              "px-3 py-1.5 rounded-full",
              "bg-white border",
              accentBorders[member.accent as keyof typeof accentBorders],
              "text-black/60"
            )}
          >
            {member.role}
          </span>

          {/* Name - Typography hierarchy */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black">
            {member.name}
          </h2>

          {/* Bio - Optimal line height for readability */}
          <p className="text-sm sm:text-base md:text-lg text-black/50 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Background Elements - Subtle and non-distracting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-blue-100/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] bg-purple-100/30 rounded-full blur-[150px]" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                <span className="text-gradient">The Team</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed">
                We make complex crypto systems understandable. That's the whole job.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid - Consistent spacing and visual rhythm */}
        <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Hick's Law: single clear action */}
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(
                "text-center p-8 sm:p-10 md:p-12 lg:p-16",
                "bg-gradient-to-br from-black/[0.02] to-black/[0.04]",
                "rounded-2xl sm:rounded-3xl",
                "border border-black/[0.06]"
              )}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                Want to work with us?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-black/50 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
                If you explain things well, or you animate, we'd like to hear from you.
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
                  "inline-flex items-center justify-center gap-2",
                  "px-6 sm:px-8 py-3 sm:py-4",
                  "bg-black text-white rounded-xl sm:rounded-2xl",
                  "font-semibold text-base sm:text-lg",
                  "hover:bg-black/90 active:scale-[0.98]",
                  "transition-all duration-200",
                  "shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-4"
                )}
              >
                Let's Talk
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
