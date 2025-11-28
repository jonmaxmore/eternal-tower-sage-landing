import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ⚠️ SECURITY WARNING: This allows images from ANY domain. Restrict this in production!
      },
    ],
  },
};

export default nextConfig;
