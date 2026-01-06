import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base styles with consistent border-radius
        "relative overflow-hidden rounded-2xl sm:rounded-3xl",
        // Glass effect with improved contrast
        "bg-white/80 backdrop-blur-xl",
        "border border-black/[0.06]",
        // Shadow hierarchy
        "shadow-sm",
        // Hover effects - Aesthetic-Usability
        hoverEffect && [
          "transition-all duration-300 ease-out",
          "hover:bg-white/90",
          "hover:border-black/[0.08]",
          "hover:shadow-lg hover:shadow-black/[0.04]",
          "hover:-translate-y-0.5"
        ],
        className,
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          "bg-gradient-to-br from-black/[0.02] to-transparent",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500"
        )}
      />
      {children}
    </div>
  )
}
