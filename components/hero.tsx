"use client"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      <div className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/di6zkr8of/video/upload/v1764819398/solana-seeker-seb_nbbogz.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-background">
        <p className="text-3xl md:text-5xl lg:text-5xl text-foreground leading-tight">
          <Link href="/" className="font-bold tracking-tighter relative z-50 text-black">
          thecommunication<span className="text-blue-600">.</span>link
        </Link> is where crypto teams find their voice.
          <br />
          We turn innovation into clear communication that attracts users.
        </p>
      </div>
    </section>
  )
}
