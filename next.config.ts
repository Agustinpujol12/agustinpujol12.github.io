import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🚀 Exporta la app como estática (necesario para GitHub Pages)
  output: "export",

  // 🚨 Opcional: ignorar errores en build (lo traías de Firebase)
  // Lo podés dejar, pero si querés más control eliminá esto.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🖼️ Configuración de imágenes
  images: {
    unoptimized: true, // Obligatorio para export estático
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },

  // ➕ Opcional: URLs con slash final (evita 404 en GitHub Pages)
  trailingSlash: true,
};

export default nextConfig;
