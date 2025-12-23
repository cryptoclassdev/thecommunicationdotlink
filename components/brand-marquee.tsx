import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const brands = [
  {
    name: "Solana",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765031556/Solana-logo_aneqxh.png",
    alt: "Solana blockchain platform logo",
  },
  {
    name: "MetaDAO",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764823177/metadao_ijxbil.svg",
    alt: "MetaDAO decentralized governance platform logo",
  },
  {
    name: "Meteora",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764823177/meteora-white_povjit.svg",
    alt: "Meteora DeFi protocol logo",
  },
  {
    name: "Claynosaurz",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764823177/claynosaurz_logo_lnsynj.svg",
    alt: "Claynosaurz NFT collection logo",
  },
  {
    name: "Jupiter",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764823177/logo-with-text-bright_wsyf02.svg",
    alt: "Jupiter aggregator platform logo",
  },
  {
    name: "Sui",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765031080/sui-logo_jlozl7.jpg",
    alt: "sui logo",
  },
  {
    name: "Fogo",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764823177/fogo_kwdw4w.jpg",
    alt: "Fogo platform logo",
  },
  {
    name: "validator",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1764828145/validator-logo_owdvbq.svg",
    alt: "validator logo"
  },
  {
    name: "genzcash",
    logo: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765031291/genzcash_usvrai.jpg",
    alt: "genzcash logo"
  }
]

export function BrandMarquee() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:30s]">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center px-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
