"use client"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Video Hero - Full viewport height */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/di6zkr8of/video/upload/v1764819398/solana-seeker-seb_nbbogz.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle gradient overlay for better transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Value Proposition - Typography Hierarchy & Spacing */}
      <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Display typography with responsive clamp sizing */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-foreground leading-[1.3] sm:leading-[1.25] tracking-tight">
            <Link
              href="/"
              className="font-bold tracking-tighter text-black hover:opacity-80 transition-opacity duration-200"
            >
              thecommunication<span className="text-blue-600">.</span>link
            </Link>{" "}
            <span className="text-black/80">is where crypto teams find their voice.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-black/60">We turn innovation into clear communication that attracts users.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
