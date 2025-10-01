/** @type {import('next').NextConfig} */
const repo = "TU_REPO"; // nombre EXACTO del repo

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // ← control por env

module.exports = {
  output: "export",

  // Si basePath está vacío, no setear estas props
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  images: { unoptimized: true },
  trailingSlash: true,

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
