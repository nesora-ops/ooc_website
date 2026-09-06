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
    theme_color: "#0D5C46",
    background_color: "#0A4536",
    icons: [
      {
        src: "/images/brand/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
