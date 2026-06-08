import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tyne Works — AI voor bedrijfsspecifieke processen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b1d2a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#f3efe6" }} />
          <div
            style={{
              color: "#f3efe6",
              fontSize: "24px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Tyne Works
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f3efe6",
            fontSize: "72px",
            lineHeight: 1.1,
          }}
        >
          <span>Van vakkennis naar</span>
          <span style={{ color: "#2f6fed" }}>slimme processen</span>
        </div>
        <div style={{ color: "#9aa3b2", fontSize: "30px", maxWidth: "900px" }}>
          AI voor bedrijfsspecifieke processen — lichte software op maat, met AI waar dat nodig is.
        </div>
      </div>
    ),
    { ...size }
  );
}
