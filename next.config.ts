import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/MDSWebsite" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
