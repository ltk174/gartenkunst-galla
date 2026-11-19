import type { NextConfig } from "next";

/**
 * Statischer Export: `npm run build` erzeugt den Ordner `out/`,
 * der auf jedem gewöhnlichen Webhosting (oder Vercel) betrieben werden kann.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
