/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add output configuration for static exports
  output: "standalone",
  // Add proper image configuration
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
