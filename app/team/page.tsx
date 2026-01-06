"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const teamMembers = [
  {
    name: "Sebastian Montgomery",
    role: "Founder",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764583245/seb-pfp_bs2cit.png",
    bio: "A prominent voice in the Solana ecosystem who has produced more than 1,000 educational videos and continues to lead the next phase of growth by advancing global understanding of decentralized infrastructure.",
    accent: "blue",
  },
  {
    name: "Chris",
    role: "Lead Researcher",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764583464/Chris-DP_endtcg.png",
    bio: "Steers our content research, breaking Solana updates into plain, useful takeaways.",
    accent: "purple",
  },
  {
    name: "Pedro",
    role: "Lead Editor & Artist",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764583475/pedro_ah9wyo.png",
    bio: "Pedro leads the creative production, crafting visually engaging content that informs, inspires, and connects with audiences. His work focuses on expanding the reach of thecommunication.link and driving broader awareness and adoption of the Solana ecosystem through high-impact storytelling and design.",
    accent: "indigo",
  },
  {
    name: "Bruno",
    role: "Content Creator",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764613095/bruno-dp_tulfzo.jpg",
    bio: "A versatile graphic designer and visual creative with a strong eye for detail and composition. Bruno produces high-quality artwork, edits video content, and supports social content creation, bringing a well-rounded skill set to projects that require both visual polish and creative flexibility.",
    accent: "pink",
  },
  {
    name: "Luca",
    role: "Animator",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765030492/hfp-pfp_arft49.jpg",
    bio: "An animator and concept artist with a bachelor's degree in animation and a master's degree in concept art. Previously part of Adobe France, Luca now creates short-form crypto animations and edits for projects like MetaDAO and Zcash, specialising in stylised formats inspired by Family Guy and Rick and Morty. Within the team, he leads animation execution, visual style development, and game and design concepts.",
    accent: "blue",
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
                A team dedicated to making complex crypto systems understandable, usable, and worth paying attention to.
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
                We're always looking for talented people to join our mission of making crypto communication accessible to everyone.
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
