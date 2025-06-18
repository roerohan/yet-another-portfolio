/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Enable server components
  experimental: {
    serverComponentsExternalPackages: [],
  },

  // Configure images
  images: {
    // Configure domains for next/image
    domains: ["images.unsplash.com"],
    // Enable unoptimized images for static export
    unoptimized: true,
  },

  // Configure output for static export
  output: "standalone",

  // Configure webpack
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
