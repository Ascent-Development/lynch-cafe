import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // sharp's native build is disallowed in this workspace (see pnpm-workspace.yaml),
    // so the on-demand image optimizer intermittently fails to resize local images.
    // Serve them unoptimized to avoid images randomly failing to load.
    unoptimized: true,
  },
};

export default nextConfig;
