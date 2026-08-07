import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sem isto o Next ignora os quality={80}/{85} das fotos e serve tudo a 75.
    qualities: [75, 80, 85],
  },
};

export default nextConfig;
