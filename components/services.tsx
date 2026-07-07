"use client"

import { motion } from "framer-motion"
import { Lightbulb, Speech, MonitorPlay, Rocket } from "lucide-react"
import { Newsreader, Spline_Sans_Mono } from "next/font/google"
import { cn } from "@/lib/utils"

const newsreader = Newsreader({ subsets: ["latin"], weight: ["500"] })
const splineMono = Spline_Sans_Mono({ subsets: ["latin"], weight: ["400"] })

const services = [
  {
    icon: <Lightbulb className="size-[22px]" strokeWidth={1.5} />,
    title: "Explainers",
    description:
      "We take a complex crypto product and explain it in plain language. What it is, and why anyone should care. No jargon, no hype.",
  },
  {
    icon: <Speech className="size-[22px]" strokeWidth={1.5} />,
    title: "Communication",
    description:
      "Products change fast and the story drifts. We keep your updates readable and your message consistent, so people can follow what you're shipping.",
  },
  {
    icon: <MonitorPlay className="size-[22px]" strokeWidth={1.5} />,
    title: "Animation",
    description:
      "Short animations that make abstract ideas easier to hold onto. We use motion to teach, not decorate. If a scene doesn't help someone understand, it gets cut.",
  },
  {
    icon: <Rocket className="size-[22px]" strokeWidth={1.5} />,
    title: "Branding",
    description:
      "How you talk about what you're building. We work out the positioning and the launch story with you, then hold it consistent everywhere it shows up.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Expertise</h2>
          <p className="mt-4 text-muted-foreground">
            The work we take on for crypto teams, and what each piece is for
          </p>
        </motion.div>

        {/* Four-column strip under a bold top rule */}
        <div className="mt-10 grid grid-cols-1 border-t-2 border-[#1c1a17] sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "flex flex-col pt-8 pb-8 lg:pb-2",
                "border-b border-[#eae7e0] lg:border-b-0",
                "lg:mr-7 lg:border-r lg:border-r-[#eae7e0] lg:pr-7 lg:last:mr-0 lg:last:border-r-0",
                "sm:max-lg:odd:border-r sm:max-lg:odd:border-r-[#eae7e0] sm:max-lg:odd:pr-7 sm:max-lg:even:pl-7"
              )}
            >
              <div className="mb-10 flex items-baseline justify-between lg:mb-14">
                <span className={cn(splineMono.className, "text-xs tracking-[0.08em] text-[#b3ac9e]")}>
                  0{index + 1}
                </span>
                <span className="inline-flex translate-y-1 text-[#1c1a17]">{service.icon}</span>
              </div>
              <h3 className={cn(newsreader.className, "mb-3 text-2xl leading-[1.15] text-[#1c1a17]")}>
                {service.title}
              </h3>
              <p className="text-sm leading-[1.6] text-[#6f695e] text-pretty">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
