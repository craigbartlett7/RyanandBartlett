import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ryan & Bartlett – Sold, and staying sold. Estate agents in Aylesbury.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
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
          background: "#fcf7f1",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={820} height={268} alt="" />
        <div style={{ marginTop: 36, fontSize: 40, color: "#8a6a2c", fontWeight: 700, letterSpacing: 1 }}>
          Sold, and staying sold. Estate agents in Aylesbury.
        </div>
      </div>
    ),
    size,
  );
}
