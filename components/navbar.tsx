"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
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
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6",
        isScrolled ? "py-3" : "py-4 sm:py-6",
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between",
          "px-5 sm:px-8 py-2.5 sm:py-3",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)]"
            : "bg-white border border-black/[0.06]",
        )}
      >
        {/* Logo - Jakob's Law: top-left, links to home */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight relative z-50 text-black transition-opacity hover:opacity-80"
        >
          thecommunication<span className="text-blue-600">.</span>link
        </Link>

        {/* Desktop Menu - Hick's Law: max 5-7 items, clear hierarchy */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium text-black/60 rounded-full",
                "hover:text-black hover:bg-black/[0.04]",
                "transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              )}
            >
              {link.name}
            </Link>
          ))}
          {/* Primary CTA - Fitts's Law: generous touch target (min 44px height) */}
          <button
            onClick={handleCalendlyClick}
            className={cn(
              "ml-2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold",
              "hover:bg-black/90 active:scale-[0.98]",
              "transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2",
              "cursor-pointer shadow-sm hover:shadow-md"
            )}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle - Fitts's Law: 44x44px touch target */}
        <button
          className={cn(
            "md:hidden relative z-50 p-2.5 -mr-2 rounded-full",
            "text-black hover:bg-black/[0.04]",
            "transition-colors duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay - Aesthetic-Usability: smooth animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-40 flex flex-col md:hidden"
            >
              {/* Mobile menu content - centered vertically with proper spacing */}
              <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block text-2xl sm:text-3xl font-medium text-black/80",
                        "py-4 px-8 rounded-full",
                        "hover:text-black hover:bg-black/[0.04]",
                        "transition-all duration-200",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Primary CTA - Fitts's Law: thumb-friendly zone at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                  className="mt-6"
                >
                  <button
                    onClick={(e) => {
                      handleCalendlyClick(e)
                      setIsMobileMenuOpen(false)
                    }}
                    className={cn(
                      "bg-black text-white px-10 py-4 rounded-full",
                      "text-lg font-semibold",
                      "hover:bg-black/90 active:scale-[0.98]",
                      "transition-all duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50",
                      "shadow-lg"
                    )}
                  >
                    Let's Talk
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
