"use client"

import { motion } from "framer-motion"

interface TweetEmbedProps {
  tweetId: string
  delay?: number
}

export function TweetEmbed({ tweetId, delay = 0 }: TweetEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl border border-black/10 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-4">
        <blockquote className="twitter-tweet">
          <a href={`https://twitter.com/genzcash/status/${tweetId}`}>Loading tweet...</a>
        </blockquote>
      </div>
    </motion.div>
  )
}
