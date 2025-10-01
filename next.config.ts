/** @type {import('next').NextConfig} */
module.exports = {
  // Export estático (genera la carpeta `out/` al hacer `next build`)
  output: "export",

  // Evita optimización de imágenes en runtime (Pages no tiene servidor)
  images: {
    unoptimized: true,
  },

  // Evita 404 en URLs tipo carpeta
  trailingSlash: true,

  // (Opcional) si querés builds estrictos, quitá estos ignores
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
