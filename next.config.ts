import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🚀 Necesario para GitHub Pages (export estático)
  output: "export",

  // ✅ Evita que Next/Image intente optimizar en runtime (no hay servidor en Pages)
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
    ],
  },

  // ➕ Recomendado en Pages para evitar 404 en rutas “carpeta”
  trailingSlash: true,

  // (Opcional) Lo traías de antes; si querés builds estrictos, quitá esto.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
