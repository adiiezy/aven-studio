import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.akis.studio",
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      }
    ],
  },
};

export default nextConfig;
