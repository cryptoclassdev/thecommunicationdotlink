/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Uncomment and set these if deploying to a subdirectory:
  // basePath: '/site',
  // assetPrefix: '/site',
}

export default nextConfig