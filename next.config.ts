import type { NextConfig } from "next";

const repoName = "velocitycompliance.github.io";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Important for next/image when exporting
  },
};

export default nextConfig;
