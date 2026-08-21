"use client";

import styles from './RecruitingPage.module.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effect from "@/components/Effect";
import Weave from "@/components/Weave";
import Link from "next/link";

export default function RecruitingPage() {
  // 🎯 마감일: 9월 9일 (지원 마감)
  const deadline = new Date("2026-09-09");
  const today = new Date();

  // 🔄 남은 날짜 계산 (올림 처리, 마감 후에는 0)
  const remainingDays = Math.max(0, Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  // 숫자 두 자리로 자르기 (표시용, 99일 초과 시 99로 표시)
  const displayDays = Math.min(remainingDays, 99);
  const firstDigit = Math.floor(displayDays / 10);
  const secondDigit = displayDays % 10;

  const timelineItems = [
    {
      date: "08/21(금) - 09/09(수)",
      title: "서류 모집"
    },
    {
      date: "09/09(수)",
      title: "서류 합격 결과 발표"
    },
    {
      date: "09/10(목) - 09/12(토)",
      title: "대면 면접"
    },
    {
      date: "09/14(월)",
      title: "최종 합격 결과 발표"
    }
  ];

  const criteriaItems = [
    "매주 동아리 정모에 참여 가능한 분 (화요일 19:00 - 20:30)",
    "AI로 무언가를 만들어보고 싶은 분",
    "함께 배우고 실험하는 데 열려 있는 분"
  ];

  const fields = [
    {
      title: "기획자",
      description: "무엇을 만들지 정하고, AI와 함께 아이디어를 실험해보고 싶은 분"
    },
    {
      title: "디자이너",
      description: "AI로 만들 서비스·콘텐츠의 경험을 그려보고 싶은 분"
    },
    {
      title: "개발자",
      description: "AI를 도구 삼아 직접 만들고 시도해보고 싶은 분"
    }
  ];

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Weave className={styles.weave} />
        <span className={styles.eyebrow}>RECRUITING</span>
        <h1 className={styles.title}>슬기짜기<br />리쿠르팅</h1>

        <div className={styles.days}>
          <span className={styles.subtitle}>지원 마감까지</span>
          <span className={styles.box}>{firstDigit}</span>
          <span className={styles.box}>{secondDigit}</span>
          <span className={styles.subtitle}>일</span>
        </div>

        <Link
          href="https://forms.gle/3SZQCQ5ymR36RH2u8"
          target="_blank"
          className={styles.heroApply}
        >
          지금 지원하기 →
        </Link>
      </section>

      <Effect />

      <section className={styles.mainContent}>
        {/* 타임라인 섹션 */}
        <div className={styles.timelineSection}>
          <span className={styles.index}>01</span>
          <div className={styles.timelineGrid}>
            {timelineItems.map((item, index) => (
              <div key={index} className={styles.timelineCard}>
                <div className={styles.timelineDate}>{item.date}</div>
                <div className={styles.timelineTitle}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 중앙 제목 */}
        <h2 className={styles.mainTitle}>AI로 무언가를<br />해보고 싶은 분을 찾아요</h2>

        {/* 지원 조건 */}
        <div className={styles.criteriaSection}>
          <span className={styles.index}>02</span>
          <div className={styles.criteriaList}>
            {criteriaItems.map((item, index) => (
              <p key={index} className={styles.criteriaItem}>{item}</p>
            ))}
          </div>
        </div>

        {/* 모집 분야 섹션 */}
        <div className={styles.recruitmentSection}>
          <div className={styles.heading}>
            <span className={styles.index}>03</span>
            <h3 className={styles.sectionTitle}>모집 분야</h3>
          </div>

          <p className={styles.fieldsLead}>
            경력이나 스펙보다, AI로 함께 만들고 실험해보고 싶은 마음이 있으면 충분해요.
            <br />
            기획 · 디자인 · 개발, 관심 있는 역할로 지원해 주세요.
          </p>

          <div className={styles.fieldsGrid}>
            {fields.map((field) => (
              <div key={field.title} className={styles.fieldCard}>
                <h4 className={styles.fieldTitle}>{field.title}</h4>
                <p className={styles.fieldDescription}>{field.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 지원하기 버튼 */}
        <div className={styles.applyWrap}>
          <Link
            href="https://forms.gle/3SZQCQ5ymR36RH2u8"
            target="_blank"
            className={styles.applyButton}
          >
            지금 지원하기
          </Link>
          <span className={styles.applySub}>구글 폼으로 이동</span>
        </div>
      </section>

      <Effect />
      <Footer />
    </>
  );
}
