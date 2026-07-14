import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vignesh Infinity Academy",
    short_name: "VIA",
    description: "School tuition and computer courses",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#020617",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
