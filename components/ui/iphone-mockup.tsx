"use client"

import React, { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IPhoneMockupProps {
  scale?: number
  className?: string
  children?: ReactNode
}

export const IPhoneMockup: React.FC<IPhoneMockupProps> = ({
  scale = 1,
  className,
  children
}) => {
  // iPhone 15 Pro dimensions
  const W = 393
  const H = 852
  const bezel = 12
  const radius = 56

  const outerWidth = W + bezel * 2
  const outerHeight = H + bezel * 2
  const outerRadius = radius + bezel

  const frameStyle: CSSProperties = {
    width: outerWidth,
    height: outerHeight,
    borderRadius: outerRadius,
    background: "linear-gradient(135deg, #2a2a2e 0%, #1c1e22 40%, #151618 100%)",
    padding: bezel,
    boxSizing: "border-box",
    boxShadow: "0 12px 30px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.22)",
    position: "relative",
    overflow: "hidden",
  }

  const screenStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: radius,
    position: "relative",
    overflow: "hidden",
    background: "#000",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03), inset 0 10px 20px rgba(0,0,0,0.35)",
  }

  const dynamicIslandStyle: CSSProperties = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: 12,
    width: 126,
    height: 37,
    borderRadius: 20,
    background: "#000",
    zIndex: 2,
    boxShadow: "0 1px 2px rgba(0,0,0,0.7)",
  }

  const homeIndicatorStyle: CSSProperties = {
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: "translateX(-50%)",
    width: Math.round(W * 0.34),
    maxWidth: 140,
    height: 5,
    borderRadius: 3,
    background: "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.35))",
    opacity: 0.9,
    zIndex: 3,
    pointerEvents: "none",
  }

  const contentStyle: CSSProperties = {
    position: "absolute",
    top: 59,
    right: 0,
    bottom: 34,
    left: 0,
    overflow: "hidden",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div
      className={cn("inline-block", className)}
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      <div style={frameStyle}>
        <div style={screenStyle}>
          {/* Dynamic Island */}
          <div aria-hidden style={dynamicIslandStyle} />

          {/* Screen content */}
          <div style={contentStyle}>{children}</div>

          {/* Home indicator */}
          <div aria-hidden style={homeIndicatorStyle} />
        </div>
      </div>
    </div>
  )
}

export default IPhoneMockup
