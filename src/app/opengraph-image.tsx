import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e3a8a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#3b82f6",
              boxShadow: "0 0 24px #3b82f6",
            }}
          />
          <span style={{ color: "#93c5fd", fontSize: 28, fontWeight: 600 }}>Portfolio</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: "#f8fafc", lineHeight: 1.05 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 32, color: "#93c5fd" }}>{site.role}</div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#cbd5e1", maxWidth: 900, lineHeight: 1.35 }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
