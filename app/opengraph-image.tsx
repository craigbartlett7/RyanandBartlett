import { ImageResponse } from "next/og";

export const alt = "Ryan & Bartlett – Sold, and staying sold. Estate agents in Aylesbury.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#14213d",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 40, color: "#ff7a59", fontWeight: 700, marginBottom: 20 }}>
          Estate agents in Aylesbury
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1.05 }}>Ryan &amp; Bartlett</div>
        <div style={{ fontSize: 52, marginTop: 24, color: "#fca311" }}>Sold, and staying sold.</div>
      </div>
    ),
    size,
  );
}
