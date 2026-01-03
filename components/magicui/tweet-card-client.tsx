"use client"

import { useEffect, useRef, useState } from "react"
import { Tweet } from "react-tweet"

export function TweetCardClient({ id }: { id: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Once visible, stop observing
            if (containerRef.current) {
              observer.unobserve(containerRef.current)
            }
          }
        })
      },
      {
        rootMargin: "200px", // Start loading 200px before the element is visible
        threshold: 0.01,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-black/10 hover:shadow-lg transition-shadow duration-300"
    >
      {isVisible ? <Tweet id={id} /> : <TweetSkeleton />}
    </div>
  )
}

export function TweetSkeleton() {
  return (
    <div className="overflow-hidden bg-white p-6 min-h-[300px]">
      <div className="animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-black/10" />
          <div className="flex-1">
            <div className="h-4 bg-black/10 rounded w-32 mb-2" />
            <div className="h-3 bg-black/10 rounded w-24" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-black/10 rounded w-full" />
          <div className="h-4 bg-black/10 rounded w-5/6" />
          <div className="h-4 bg-black/10 rounded w-4/6" />
        </div>
      </div>
    </div>
  )
}
