import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Organisation of Choice™";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// seal.png is transparent, so it needs a ground to sit on. Composited here at
// build time rather than shipping a second, pre-flattened seal file.
export default async function OpengraphImage() {
  let seal: string | null = null;
  try {
    const file = await readFile(join(process.cwd(), "public/images/brand/seal.png"));
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
          Organisation of Choice
        </div>
      </div>
    ),
    size
  );
}
