// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const siteUrl = "https://slegizzagi.vercel.app";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg,#0f172a 0%,#111827 50%,#1f2937 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 36, opacity: 0.8 }}>slegizzagi.vercel.app</div>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <img
            src={`${siteUrl}/logo.svg`}  // public/logo.svg 필요
            width={160}
            height={160}
            alt="SLE Logo"
            style={{ padding: 24, background: "rgba(255,255,255,0.06)", borderRadius: 24 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.1 }}>슬기짜기(SLE)</div>
            <div style={{ fontSize: 36, opacity: 0.9 }}>배우고, 만들고, 나누는 커뮤니티</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 28, opacity: 0.9 }}>
          <span>Since 2025</span><span>•</span><span>SLE</span>
        </div>
      </div>
    ),
    size
  );
}
