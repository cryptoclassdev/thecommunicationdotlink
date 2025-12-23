"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
  blue: "from-blue-400/20 to-blue-600/20",
  purple: "from-purple-400/20 to-purple-600/20",
  indigo: "from-indigo-400/20 to-indigo-600/20",
  pink: "from-pink-400/20 to-pink-600/20",
}

const accentBorders = {
  blue: "border-blue-500/30",
  purple: "border-purple-500/30",
  indigo: "border-indigo-500/30",
  pink: "border-pink-500/30",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-blue-300/20 rounded-full blur-[120px] animate-blob mix-blend-multiply" />
          <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] bg-purple-300/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
                <span className="text-gradient">The Team </span>
              </h1>
              <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
                A team dedicated to making complex crypto systems understandable, usable, and worth paying attention to.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="relative py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8">
              {teamMembers.map((member, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 items-center group`}
                  >
                    {/* Image Section */}
                    <div className="w-full md:w-2/5 relative">
                      <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-black/5 to-black/10 border border-black/10">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            accentColors[member.accent as keyof typeof accentColors]
                          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`w-full md:w-3/5 ${isEven ? "md:pl-8" : "md:pr-8"}`}>
                      <div className="space-y-4">
                        <div>
                          <motion.div
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            <span
                              className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                                accentBorders[member.accent as keyof typeof accentBorders]
                              } bg-white/50 text-black/70 mb-3`}
                            >
                              {member.role}
                            </span>
                          </motion.div>
                          <motion.h2
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                          >
                            {member.name}
                          </motion.h2>
                        </div>
                        <motion.p
                          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="text-base md:text-lg text-black/60 leading-relaxed"
                        >
                          {member.bio}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-black/5 to-black/10 rounded-3xl p-12 md:p-16 border border-black/10"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Want to work with us?</h2>
              <p className="text-lg text-black/60 mb-8 max-w-xl mx-auto leading-relaxed">
                We're always looking for talented people to join our mission of making crypto communication accessible
                to everyone.
              </p>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).Calendly) {
                    ;(window as any).Calendly.initPopupWidget({
                      url: "https://calendly.com/seb-thecommunication/30min",
                    })
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-black/90 transition-all hover:scale-105"
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
