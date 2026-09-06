import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  webpack(config) {
    // Replace Next.js image loader so PNG imports return plain URL strings
    // (matching Vite behavior) instead of StaticImageData objects.
    for (const rule of config.module.rules) {
      if (rule?.oneOf) {
        const idx = rule.oneOf.findIndex((r: any) =>
          typeof r?.loader === "string" && r.loader.includes("next-image-loader")
        );
        if (idx !== -1) {
          rule.oneOf.splice(idx, 1, {
            test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$/i,
            type: "asset/resource",
            generator: { filename: "static/images/[name].[hash][ext]" },
          });
          break;
        }
      }
    }
    return config;
  },
};

export default nextConfig;
