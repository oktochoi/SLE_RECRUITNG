// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteTitle = "슬기짜기(SLE)";
const siteDesc = "슬기롭게 만들고, 배우고, 나누는 커뮤니티";
const siteUrl = "https://slegizzagi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | 슬기짜기" },
  description: siteDesc,
  themeColor: "#000000",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    siteName: "슬기짜기",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
