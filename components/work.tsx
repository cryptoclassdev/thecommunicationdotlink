"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const projects = [
  {
    title: "MetaDAO",
    category: "Explainers, Animations, New Project Coverage",
    description:
      "Helping MetaDAO explain futarchy, governance, and on-chain decision-making through clear explainers, short-form animations, and ecosystem coverage.",
    video: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010051/metadao-thumb_kaqxir.mp4",
    poster: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010051/metadao-thumb_kaqxir.jpg",
    color: "from-[#FF4949]/20 to-[#FF6B6B]/20",
    slug: "metadao",
    tags: ["Explainers", "Animations", "Coverage"],
  },
  {
    title: "Meteora",
    category: "Explainers, New User Onbaording",
    description:
      "Helping Meteora onboard new users through clear explainers and structured onboarding that makes liquidity provisioning and DLMMs easy to understand.",
    video: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765011323/met-thumb_aqjzdj.mp4",
    poster: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765011323/met-thumb_aqjzdj.jpg",
    color: "from-[#FF5722]/20 to-[#9C27B0]/20",
    slug: "meteora",
    tags: ["Explainers", "Onboarding"],
  },
  {
    title: "ZCASH",
    category: "Animations",
    description:
      "Helping Zcash communicate the importance of privacy through clear explainers, narrative-driven content, and culturally relevant animations.",
    video: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010080/zcash-thumb_x2k9mn.mp4",
    poster: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010080/zcash-thumb_x2k9mn.jpg",
    color: "from-[#F9A825]/20 to-[#FFEB3B]/20",
    slug: "zcash",
    tags: ["Animations", "Motion Design"],
  },
  {
    title: "Solana Mobile",
    category: "Product Review",
    description:
      "Providing a detailed, user-focused product review that clearly explains Solana Mobile’s hardware, software, and ecosystem experience.",
    video: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010165/solana-mobile_utrgao.mp4",
    poster: "https://res.cloudinary.com/di6zkr8of/video/upload/v1765010165/solana-mobile_utrgao.jpg",
    color: "from-[#00B8B8]/20 to-[#9B4BFF]/20",
    slug: "solana-mobile",
    tags: ["Product Review", "Video Content"],
  },
]

function ProjectMedia({ project }: { project: (typeof projects)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)

  const handleMouseEnter = async () => {
    if (videoRef.current) {
      playPromiseRef.current = videoRef.current.play()
      try {
        await playPromiseRef.current
      } catch (error) {
        // Ignore AbortError that occurs when play is interrupted
      }
    }
  }

  const handleMouseLeave = async () => {
    if (videoRef.current && playPromiseRef.current) {
      try {
        await playPromiseRef.current
        videoRef.current.pause()
      } catch (error) {
        // Ignore any errors
      }
    }
  }

  return (
    <div className="relative h-[400px] overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        ref={videoRef}
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-100/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Work</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of projects where we helped crypto teams clarify their message, shape their narrative, and drive
            real adoption.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <GlassCard className="p-0 overflow-hidden group cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className={`p-12 flex flex-col justify-center relative overflow-hidden`}>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      />
                      <div className="relative z-10">
                        <span className="text-sm font-medium text-black/50 mb-4 block uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                          {project.title}
                        </h3>
                        <p className="text-black/70 mb-8 max-w-md">{project.description}</p>
                        <div className="flex items-center gap-4 text-sm font-medium">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-4 py-2 rounded-full bg-black/5 border border-black/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ProjectMedia project={project} />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
