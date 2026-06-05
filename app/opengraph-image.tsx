import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share image (Munich black & gold). Uses Latin text only so it renders
// reliably without bundling a CJK font.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#121212",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "4px solid rgba(255,204,0,0.30)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "#ffcc00",
            fontSize: 26,
            letterSpacing: 8,
            fontWeight: 700,
          }}
        >
          SEIT 1980
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            marginTop: 14,
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            marginTop: 18,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: 40,
            background: "#ffcc00",
            color: "#121212",
            fontSize: 28,
            fontWeight: 700,
            padding: "12px 22px",
            borderRadius: 9999,
          }}
        >
          Der größte Kendo-Verein Bayerns
        </div>
      </div>
    ),
    { ...size }
  );
}
