// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const site = "https://slegizzagi.vercel.app"; // 실제 도메인으로 바꾸세요

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "슬기짜기 SLE — 한동대 컴퓨터공학 동아리",
    template: "%s | 슬기짜기 SLE",
  },
  description:
    "한동대 컴퓨터공학 동아리 슬기짜기(SLE)의 스터디, 프로젝트, 리크루팅, 활동 기록.",
  alternates: { canonical: site },
  openGraph: {
    type: "website",
    url: site,
    title: "슬기짜기 SLE — 한동대 컴퓨터공학 동아리",
    description:
      "한동대 슬기짜기: 스터디/프로젝트/리크루팅 안내와 활동 기록을 제공합니다.",
    images: [{ url: "/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "슬기짜기 SLE — 한동대 컴퓨터공학 동아리",
    description:
      "한동대 슬기짜기: 스터디/프로젝트/리크루팅 안내와 활동 기록.",
    images: ["/og.png"],
  },
  // 👇 여기 올바른 방식fd
  other: {
    // ✅ 구글 사이트 인증 메타태그 추가
    "google-site-verification":
      "iZ95LzEUrPV707zcy_yLqOHN07C_Xo5XDfHyWr4Y9q0",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
