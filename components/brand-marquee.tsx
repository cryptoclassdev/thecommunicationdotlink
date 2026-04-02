import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"
import { ASSETS } from "@/lib/assets"

const brands = [
  {
    name: "Solana",
    logo: ASSETS.brands.solana,
    alt: "Solana blockchain platform logo",
  },
  {
    name: "MetaDAO",
    logo: ASSETS.brands.metadao,
    alt: "MetaDAO decentralized governance platform logo",
  },
  {
    name: "Meteora",
    logo: ASSETS.brands.meteora,
    alt: "Meteora DeFi protocol logo",
  },
  {
    name: "Claynosaurz",
    logo: ASSETS.brands.claynosaurz,
    alt: "Claynosaurz NFT collection logo",
  },
  {
    name: "Jupiter",
    logo: ASSETS.brands.jupiter,
    alt: "Jupiter aggregator platform logo",
  },
  {
    name: "Sui",
    logo: ASSETS.brands.sui,
    alt: "sui logo",
  },
  {
    name: "Fogo",
    logo: ASSETS.brands.fogo,
    alt: "Fogo platform logo",
  },
  {
    name: "validator",
    logo: ASSETS.brands.validator,
    alt: "validator logo"
  },
  {
    name: "genzcash",
    logo: ASSETS.brands.genzcash,
    alt: "genzcash logo"
  }
]

export function BrandMarquee() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      {/* Section header - Miller's Law: chunked information */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <p className="text-center text-sm sm:text-base font-medium text-black/40 uppercase tracking-wider">
          Trusted by leading crypto teams
        </p>
      </div>

      {/* Marquee with improved spacing and visual hierarchy */}
      <div className="relative">
        {/* Edge fade gradients for polished look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover className="[--duration:35s] py-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center px-6 sm:px-8 md:px-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.alt}
                width={140}
                height={70}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
