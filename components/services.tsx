"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Smartphone, Lightbulb, Speech, MonitorPlay } from "lucide-react"

const services = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "Narrative & Messaging Architecture",
    description: "Clear, compelling messaging that turns complex ideas into simple, memorable stories. We refine your value proposition, build your narrative, and make people finally get what you are building.",
  },
  {
    icon: <Speech className="w-8 h-8 text-purple-600" />,
    title: "Community Communication Systems",
    description: "Every great crypto product needs a communication engine. We create scalable communication frameworks for Discord, X, announcements, and product updates—keeping your community aligned, informed, and excited.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-indigo-600" />,
    title: "User Acquisition Content",
    description: "Threads, scripts, explainers, landing pages, and education flows designed to convert curiosity into users.We distill your product into content that spreads.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-pink-600" />,
    title: "Growth & Launch Strategy",
    description: "From narrative positioning to launch playbooks, we map out how your project gets users, attention, and traction. Data-backed, crypto-native, and aligned with how people actually discover products today.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-black/5 w-fit group-hover:bg-black/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-black/60 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-black/40 group-hover:text-black transition-colors">
                  Learn more <div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
