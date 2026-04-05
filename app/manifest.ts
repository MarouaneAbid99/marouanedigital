import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "MAROUANE",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#05080e",
    theme_color: "#05080e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
