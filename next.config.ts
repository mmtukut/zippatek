import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Ensure proper static optimization
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
