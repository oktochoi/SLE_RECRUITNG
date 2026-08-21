import About from "@/components/About";
import Effect from "@/components/Effect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingWeave from "@/components/LandingWeave";
import Main from "@/components/Main";
import Project from "@/components/Project";
import Recruiting from "@/components/Recruiting";
import Study from "@/components/Study";
import Value from "@/components/Value";
import Script from "next/script";

export const revalidate = 3600; // 정적 생성 + ISR

export const metadata = {
  title: "슬기짜기(SLE) — 한동대 컴퓨터공학 동아리",
  description:
    "한동대 컴퓨터공학 동아리 슬기짜기(SLE) 공식 사이트. 스터디, 프로젝트, 리크루팅 정보를 확인하세요.",
};

export default function Page() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "슬기짜기(SLE)",
    url: "https://slegizzagi.vercel.app", // 실제 도메인으로 변경
    logo: "https://slegizzagi.vercel.app/logo-mark.png",
  };

  return (
    <>
      {/* SEO: 구조화 데이터 */}
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* 당신의 섹션들 */}
      <LandingWeave />
      <Header />
      <Main />
      <Value />
      <About />
      <Study />
      <Project />
      <Effect />
      <Recruiting />
      <Effect />
      <Footer />
    </>
  );
}