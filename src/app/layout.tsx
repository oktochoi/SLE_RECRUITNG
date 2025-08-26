// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const siteUrl = "https://slegizzagi.vercel.app"; // 반드시 배포 도메인

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
          // 그라데이션 배경(다크 UI와 조화)
          background: "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1f2937 100%)",
          color: "white",
        }}
      >
        {/* 상단 도메인 */}
        <div style={{ fontSize: 36, opacity: 0.8 }}>slegizzagi.vercel.app</div>

        {/* 중앙 로고 + 타이틀 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {/* 로고: /public/logo.svg 를 그대로 사용 */}
          <img
            src={`${siteUrl}/logo.svg`}
            width={160}
            height={160}
            alt="SLE Logo"
            style={{
              display: "block",
              // 로고가 투명 배경일 때 보기 좋게 라운드+패딩
              padding: 24,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 24,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.1 }}>슬기짜기(SLE)</div>
            <div style={{ fontSize: 36, opacity: 0.9 }}>배우고, 만들고, 나누는 커뮤니티</div>
          </div>
        </div>

        {/* 하단 라벨 */}
        <div style={{ display: "flex", gap: 16, fontSize: 28, opacity: 0.9 }}>
          <span>Since 2025</span>
          <span>•</span>
          <span>SLE</span>
        </div>
      </div>
    ),
    size
  );
}
