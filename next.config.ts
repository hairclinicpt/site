import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/privacidade", destination: "/diagnostico/privacidade.html" },
        { source: "/diagnostico", destination: "/diagnostico/lp.html" },
        { source: "/diagnostico/", destination: "/diagnostico/lp.html" },
        { source: "/diagnostico/obrigado", destination: "/diagnostico/obrigado.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    // AVIF primeiro (≈20% menor que WebP), com WebP para browsers sem suporte.
    formats: ["image/avif", "image/webp"],
    // Sem isto o Next ignora os quality={80} das fotos e serve tudo a 75.
    qualities: [75, 80],
    // Os originais têm no máximo 2048px — pedir 3840 só faria upscale inútil.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
