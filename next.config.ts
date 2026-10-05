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
  // Old resume links (shared before the rename) still reach the current resume
  async redirects() {
    return [
      {
        source: '/devansh_draft_resume.pdf',
        destination: '/Devansh_Jagtap_Resume.pdf',
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
  serverExternalPackages: ["keydrop"]
};

export default nextConfig;
