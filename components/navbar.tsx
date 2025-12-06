"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "/team" },
  ]

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/seb-thecommunication/30min" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-4" : "py-6",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
          "bg-white border border-black/10",
        )}
      >
        <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50 text-black">
          thecommunication<span className="text-blue-600">.</span>link
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleCalendlyClick}
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-black/90 transition-colors"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden relative z-50 text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-light text-black hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleCalendlyClick}
                className="mt-4 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
