import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.prizminstitute.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "videocdn.cdnpk.net",
      },
      {
        protocol: "https",
        hostname: "www.allgsmtips.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      }
    ],
  },
};

export default nextConfig;
