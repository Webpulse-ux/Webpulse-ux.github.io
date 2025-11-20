import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Export a fully static site so it can be hosted on GitHub Pages.
   * The image optimizer is disabled because Pages does not run a Node server.
   */
  output: "export",
  images: {
    unoptimized: true,
  },
  /**
   * The turbopack root keeps builds scoped to this project and removes
   * warnings about multiple lockfiles higher up the directory tree.
   */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
