import type { MetadataRoute } from "next";

import { siteName } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "OOC",
    description:
      "Independent workplace certification for employers who want to prove they're a great place to work.",
    start_url: "/",
    display: "standalone",
    theme_color: "#FFFFFF",
    background_color: "#1F2A5A",
    icons: [
      {
        src: "/images/brand/favicon-512-navy.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
