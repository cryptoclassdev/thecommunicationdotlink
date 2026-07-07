import { cn } from "@/lib/utils"

const socials = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SebMontgomery/videos",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/SebMontgomery",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function SocialLinks({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name} — Seb Montgomery`}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            "bg-black/[0.04] border border-black/[0.06] text-black/50",
            "hover:text-black hover:bg-black/[0.06] hover:border-black/[0.08]",
            "transition-colors duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          )}
        >
          <span className={cn("w-4.5 h-4.5 block", iconClassName)}>{social.icon}</span>
        </a>
      ))}
    </div>
  )
}
