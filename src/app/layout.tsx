// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const site = "https://slegizzagi.vercel.app"; // 실제 도메인으로 바꾸세요

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
    images: [
      {
        url: "/og.png?v=2",
        width: 1200,
        height: 630,
        alt: "슬기짜기 SLE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "슬기짜기 SLE — 한동대 컴퓨터공학 동아리",
    description:
      "한동대 슬기짜기: 스터디/프로젝트/리크루팅 안내와 활동 기록.",
    images: ["/og.png?v=2"],
  },
  other: {
    "google-site-verification":
      "iZ95LzEUrPV707zcy_yLqOHN07C_Xo5XDfHyWr4Y9q0",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="min-h-dvh">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
