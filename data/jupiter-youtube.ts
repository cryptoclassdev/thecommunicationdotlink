export const JUPITER_VIDEOS = [
  { id: "qQ_VCRtKMdo", title: "How to Use DLMM Pools to Earn $ - Meteora Tutorial", views: 35267 },
  { id: "PzfVXXZcf2A", title: "How to Earn $ by Adding Liquidity - Raydium Tutorial", views: 21849 },
  { id: "rrXsN7-9RNI", title: "Follow Murad Mahmudov NOW or Miss This Next Bitcoin-Level Explosion", views: 15026 },
  { id: "cxld81X_9n0", title: "Withdrawing from Your Liquidity Pools - Raydium Tutorial", views: 13614 },
  { id: "GDYkDAIoaxU", title: "Multiply Your JLP APY With Kamino", views: 10213 },
  { id: "RNiSDyoEOxs", title: "Can You Master Leverage Trading with Jupiter Perps?", views: 6389 },
  { id: "-o1EMwUnJxA", title: "This Token's Price Keeps Going Up ...", views: 5289 },
  { id: "zzkA-znmJVU", title: "Why is JupSOL Token So Special?", views: 5040 },
]

export const JUPITER_CHANNEL_AVERAGE_VIEWS = 2405
export const JUPITER_FEATURED_AVERAGE_VIEWS = Math.round(
  JUPITER_VIDEOS.reduce((total, video) => total + video.views, 0) / JUPITER_VIDEOS.length
)
export const JUPITER_FEATURED_LIFT = JUPITER_FEATURED_AVERAGE_VIEWS / JUPITER_CHANNEL_AVERAGE_VIEWS
