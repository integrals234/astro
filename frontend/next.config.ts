import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/test-alpha",
        destination: "/personal-appraisals",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
