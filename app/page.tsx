"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BrandMarquee } from "@/components/brand-marquee"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export default function Home() {
  const handleScheduleCall = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/seb-thecommunication/30min",
      })
    }
  }

  return (
    <main className="min-h-screen bg-white text-black selection:bg-blue-500/20">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Work />
      <Services />

      {/* Call to Action Section - Hick's Law: single clear action */}
      <section id="contact" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/60 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Headline - Typography hierarchy with responsive sizing */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.15]">
            Ready to onboard{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">the next billion?</span>
          </h2>

          {/* Subheadline - Optimal reading width */}
          <p className="text-base sm:text-lg md:text-xl text-black/50 mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
            Let's collaborate to build something extraordinary. Your vision, our expertise.
          </p>

          {/* Primary CTA - Fitts's Law: large, prominent touch target */}
          <button
            onClick={handleScheduleCall}
            className={cn(
              "inline-flex items-center justify-center",
              "px-8 sm:px-10 py-4 sm:py-5",
              "bg-black text-white rounded-2xl",
              "font-semibold text-base sm:text-lg md:text-xl",
              "hover:bg-black/90 active:scale-[0.98]",
              "transition-all duration-200",
              "shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15",
              "cursor-pointer",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-4"
            )}
          >
            Schedule a call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
