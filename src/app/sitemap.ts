// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://slegizzagi.vercel.app";// 실제 도메인
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/study`, priority: 0.8 },
    { url: `${base}/project`, priority: 0.8 },
    { url: `${base}/recruiting`, priority: 0.8 },
  ];
}
