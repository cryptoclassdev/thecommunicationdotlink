"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BrandMarquee } from "@/components/brand-marquee"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Footer } from "@/components/footer"

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

      {/* Call to Action Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to onboard <br />
            <span className="text-gradient">the next billion?</span>
          </h2>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
            Let's collaborate to build something extraordinary. Your vision, our expertise.
          </p>
          <button
            onClick={handleScheduleCall}
            className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]"
          >
            Schedule a call
          </button>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-100/40 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  )
}
