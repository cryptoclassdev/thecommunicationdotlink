"use client"

import Image, { type StaticImageData } from "next/image"
import type React from "react"
import { cn } from "@/lib/utils"

interface SafariMockupProps {
  image?: StaticImageData | string
  className?: string
}

export const SafariMockup: React.FC<SafariMockupProps> = ({ image, className }) => {
  return (
    <div
      className={cn(
        "rounded-xl sm:rounded-2xl border border-black/[0.08] bg-white shadow-xl overflow-hidden",
        className,
      )}
    >
      {/* Browser top bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border-b border-black/[0.06]">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF5F57] rounded-full" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FEBC2E] rounded-full" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#28C840] rounded-full" />
        </div>
        <div className="flex-1 mx-3 sm:mx-4 bg-black/[0.04] rounded-md h-5 sm:h-6 max-w-xs sm:max-w-md" />
        <div className="w-4 h-4" />
      </div>

      {/* Preview area */}
      <div className="bg-gray-100 aspect-[16/10] flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt="Website preview"
            width={1891}
            height={850}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-sm text-black/30">No preview image</div>
        )}
      </div>
    </div>
  )
}

export default SafariMockup
