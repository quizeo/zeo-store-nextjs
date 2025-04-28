/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    // This bypasses TypeScript errors during build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  eslint: {
    dirs: ["pages", "utils"], // Only run ESLint on specified directories
  },
};

module.exports = nextConfig;
