import Link from "next/link"
import { cn } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sitemapLinks = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Team", href: "/team" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden bg-white">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main footer grid - Law of Proximity: grouped related content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-xl sm:text-2xl font-bold tracking-tight mb-4 text-black hover:opacity-80 transition-opacity"
            >
              thecommunication<span className="text-blue-600">.</span>link
            </Link>
            <p className="text-sm sm:text-base text-black/50 leading-relaxed max-w-xs">
              Your product is powerful. We make it understood, remembered, and adopted.
            </p>
          </div>

          {/* Sitemap Column - Miller's Law: chunked links */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4 sm:mb-5">
              Sitemap
            </h4>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm sm:text-base text-black/50",
                      "hover:text-black transition-colors duration-200",
                      "inline-block py-0.5"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4 sm:mb-5">
              Let's Chat
            </h4>
            <p className="text-sm sm:text-base text-black/50 mb-3">
              Have a project in mind?
            </p>
            <a
              href="mailto:hello@thecommunication.link"
              className={cn(
                "inline-block text-base sm:text-lg font-medium text-black",
                "hover:text-blue-600 transition-colors duration-200",
                "break-all sm:break-normal"
              )}
            >
              hello@thecommunication.link
            </a>
          </div>
        </div>

        {/* Bottom bar - Copyright and legal links */}
        <div className={cn(
          "flex flex-col sm:flex-row items-center justify-between gap-4",
          "pt-6 sm:pt-8 border-t border-black/[0.06]",
          "text-xs sm:text-sm text-black/40"
        )}>
          <p className="text-center sm:text-left">
            &copy; {currentYear}{" "}
            <Link href="/" className="hover:text-black transition-colors">
              thecommunication.link
            </Link>
            . All rights reserved.
          </p>

          {/* Legal links - Fitts's Law: adequate spacing for touch targets */}
          <div className="flex items-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-1 hover:text-black transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
