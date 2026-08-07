import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hair Clinic by Fábia Oliveira",
    short_name: "Hair Clinic",
    description:
      "Clínica capilar especializada em tricologia e diagnóstico avançado no Porto.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fdfaf5",
    theme_color: "#5c6e50",
    lang: "pt-PT",
    categories: ["health", "beauty", "lifestyle"],
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
