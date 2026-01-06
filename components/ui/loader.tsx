"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface LoaderProps {
  texts?: string[]
  intervalMs?: number
  className?: string
}

export function Loader({
  texts = ["Generating tweets..."],
  intervalMs = 3000,
  className,
}: LoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (texts.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [texts.length, intervalMs])

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      {/* Spinner */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-[3px] border-black/10" />
        <div className="absolute inset-0 w-10 h-10 rounded-full border-[3px] border-transparent border-t-black animate-spin" />
      </div>

      {/* Shimmer Text */}
      <div className="relative overflow-hidden">
        <span
          key={currentIndex}
          className={cn(
            "block text-sm font-medium text-black/60",
            "animate-fade-in"
          )}
        >
          <span className="shimmer-text">{texts[currentIndex]}</span>
        </span>
      </div>

      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.6) 40%,
            rgba(0, 0, 0, 0.9) 50%,
            rgba(0, 0, 0, 0.6) 60%,
            rgba(0, 0, 0, 0.6) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Loader
