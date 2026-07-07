const BLOB_BASE = "https://lixp9d63v9mlfewl.public.blob.vercel-storage.com"

export const ASSETS = {
  videos: {
    heroSolanaSeeker: `${BLOB_BASE}/videos/hero/solana-seeker-seb.mp4`,
    workMetadaoThumb: `${BLOB_BASE}/videos/work/metadao-thumb.mp4`,
    workMeteora: `${BLOB_BASE}/videos/work/meteora-video.mp4`,
    workZcashThumb: `${BLOB_BASE}/videos/work/zcash-thumb.mp4`,
    workSolanaMobile: `${BLOB_BASE}/videos/work/solana-mobile.mp4`,
  },

  posters: {
    metadaoThumb: `${BLOB_BASE}/images/posters/metadao-thumb.jpg`,
    meteoraPoster: `${BLOB_BASE}/images/posters/meteora-poster.jpg`,
    zcashThumb: `${BLOB_BASE}/images/posters/zcash-thumb.jpg`,
    seekerThumb: `${BLOB_BASE}/images/posters/seeker-thumb.jpg`,
  },

  brands: {
    solana: `${BLOB_BASE}/images/brands/solana-logo.png`,
    metadao: `${BLOB_BASE}/images/brands/metadao.svg`,
    meteora: `${BLOB_BASE}/images/brands/meteora-white.svg`,
    jupiter: `${BLOB_BASE}/images/brands/jupiter-logo.svg`,
    fogo: `${BLOB_BASE}/images/brands/fogo.jpg`,
    validator: `${BLOB_BASE}/images/brands/validator-logo.svg`,
    genzcash: `${BLOB_BASE}/images/brands/genzcash.jpg`,
    // Local assets in public/brands/
    magiceden: "/brands/magiceden.png",
    kast: "/brands/kast.svg",
    okx: "/brands/okx.png",
  },

  team: {
    seb: `${BLOB_BASE}/images/team/seb-pfp.jpg`,
    chris: `${BLOB_BASE}/images/team/chris-dp.png`,
    pedro: `${BLOB_BASE}/images/team/pedro.png`,
    bruno: `${BLOB_BASE}/images/team/bruno-dp.jpg`,
    luca: `${BLOB_BASE}/images/team/hfp-pfp.jpg`,
    // Local assets in public/team/ — replace the file to update the photo
    nicole: "/team/nicole.jpg",
    tyler: "/team/tyler.jpg",
    sublime: "/team/sublime.jpg",
  },

  projects: {
    metadaoHubScreenshot: `${BLOB_BASE}/images/projects/metadao-hub-screenshot.png`,
    metadaoLinkMobilePreview: `${BLOB_BASE}/images/projects/metadao-link-mobile-preview.png`,
  },
} as const
