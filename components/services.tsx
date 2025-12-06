"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Lightbulb, Speech, MonitorPlay, Rocket } from "lucide-react"
import type { ReactNode } from "react"

const services = [
  {
    icon: <Lightbulb className="size-6" />,
    title: "Explainers",
    description:
      "Clear, compelling messaging that turns complex ideas into simple, memorable stories. We refine your value proposition, build your narrative, and make people finally get what you are building.",
  },
  {
    icon: <Speech className="size-6" />,
    title: "Communication",
    description:
      "Every great crypto product needs a communication engine. We create scalable communication frameworks for Discord, X, announcements, and product updates—keeping your community aligned, informed, and excited.",
  },
  {
    icon: <MonitorPlay className="size-6" />,
    title: "Animation",
    description:
      "Threads, scripts, explainers, landing pages, and education flows designed to convert curiosity into users. We distill your product into content that spreads.",
  },
  {
    icon: <Rocket className="size-6" />,
    title: "Branding",
    description:
      "From narrative positioning to launch playbooks, we map out how your project gets users, attention, and traction. Data-backed, crypto-native, and aligned with how people actually discover products today.",
  },
]

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
)

export function Services() {
  return (
    <section id="services" className="bg-muted/50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Expertise</h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive communication solutions for crypto teams that want to grow
          </p>
        </motion.div>

        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-2 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group shadow-zinc-950/5"
            >
              <CardHeader className="pb-3">
                <CardDecorator>{service.icon}</CardDecorator>

                <h3 className="mt-6 font-medium text-xl">{service.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </motion.div>
          ))}
        </Card>
      </div>
    </section>
  )
}
