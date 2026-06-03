import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
  reactCompiler: true,
  serverExternalPackages: ["keydrop"]
};

export default nextConfig;
