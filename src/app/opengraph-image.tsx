import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { siteDefaults } from "@/content/site";
import { getSite } from "@/lib/content";

// Static: Next reads the alt at build time. The image text below is editable.
export const alt = siteDefaults.siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The seal is transparent outside its ring, so it needs a ground to sit on.
// Composited here at build time rather than shipping a pre-flattened seal file.
export default async function OpengraphImage() {
  const site = await getSite();
  let seal: string | null = null;
  try {
    const file = await readFile(join(process.cwd(), "public/images/brand/ooc-seal-full.png"));
    seal = `data:image/png;base64,${file.toString("base64")}`;
  } catch {
    // Asset not present yet — render the branded ground alone rather than
    // failing the build.
    seal = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          backgroundColor: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {seal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={seal} alt="" width={300} height={300} />
        ) : null}
        <div style={{ display: "flex", color: "#1F2A5A", fontSize: 54, fontWeight: 600 }}>
          {site.ogImageText}
        </div>
      </div>
    ),
    size
  );
}
