import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.designedbyarushi.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;