"use client"

import { motion } from "framer-motion"

interface PulsatingDotsProps {
  color?: string
}

export default function PulsatingDots({ color = "black" }: PulsatingDotsProps) {
  const bgColorClass = color === "black" ? "bg-black" : `bg-${color}-500`

  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <motion.div
          className={`h-3 w-3 rounded-full ${bgColorClass}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className={`h-3 w-3 rounded-full ${bgColorClass}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.3,
          }}
        />
        <motion.div
          className={`h-3 w-3 rounded-full ${bgColorClass}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  )
}
