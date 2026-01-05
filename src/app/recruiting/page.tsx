"use client";

import styles from './RecruitingPage.module.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effect from "@/components/Effect";
import Image from "next/image";
import Link from "next/link";

export default function RecruitingPage() {
  // 🎯 마감일 지정 (YYYY-MM-DD 형식)
  const deadline = new Date("2025-08-27");
  const today = new Date();

  // 🔄 남은 날짜 계산 (올림 처리)
  const remainingDays = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // 숫 두 자리로 자르기
  const firstDigit = Math.floor(remainingDays / 10);
  const secondDigit = remainingDays % 10;

  const timelineItems = [
    {
      date: "08/31(일) - 09/10(수)",
      title: "1차 서류 모집"
    },
    {
      date: "09/11(목)",
      title: "1차 서류 합격 결과 발표"
    },
    {
      date: "09/12(금) - 09/14(일)",
      title: "대면 면접"
    },
    {
      date: "09/15(월)",
      title: "2차 최종 합격 결과 발표"
    }
  ];

  const criteriaItems = [
    "매주 동아리 정모에 참여 가능한 분 (화요일 19:00 - 20:30)",
    "전공 친구를 사귀며 함께 열심히 스터디에 참여 가능한 분",
    "방학 프로젝트를 진행하고 싶으신 분"
  ];

  const designerRequirements = [
    "UX/UI, 그래픽 디자인, 포스터/콘텐츠 제작에 관심이 있으신 분",
    "Figma, Photoshop, Illustrator 등 툴 사용 가능하신 분",
    "개발자와 협업하고 싶으신 분",
    "색감, 레이아웃, 타이포그래피 감각이 있으신 분"
  ];

  const designerPreferred = [
    "웹/앱 디자인 경험이 있으신 분",
    "포트폴리오가 있으신 분",
    "프론트엔드에 관심이 있으신 분"
  ];

  const developerRequirements = [
    "컴퓨터과학, 소프트웨어, 데이터 분석에 관심이 있으신 분",
    "배우고 성장하고 싶은 마음만 있으면 됩니다 (사전 지식 불필요)",
    "최소 2학기 이상 활동 가능하신 분",
    "스터디와 프로젝트에 적극적으로 참여하고 싶으신 분"
  ];

  const developerPreferred = [
    "Git 사용 경험이 있으신 분",
    "개발 경험이 있으신 분",
    "팀워크에 자신 있으신 분"
  ];

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <div className={styles.backgroundGradient}></div>

        <div className={styles.content}>
          <h2 className={styles.title}>현재는 지원을 받고 있지 않습니다.</h2>
          {/* 
          <h2 className={styles.title}>슬기짜기 리쿠르팅</h2>

          <div className={styles.days}>
            <span className={styles.subtitle}>지원 마감까지&nbsp;</span>
            <span className={styles.box}>0</span>
            <span className={styles.box}>0</span>
            <span className={styles.subtitle}>일</span>
          </div>
          */}

          <div className={styles.buttonWrapper}>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc9EIMukZhMV2DV7ANwW4zCvJK5Al0mkPrmvRaWNl11U7fPmg/viewform?usp=header" target="_blank">
              <Image
                src="/rc2.svg"
                alt="지금 지원하기"
                width={280}
                height={88}
                className={styles.button}
              />
            </Link>
          </div>
        </div>
      </section>

      <Effect />

      <section className={styles.mainContent}>
        {/* 타임라인 섹션 */}
        <div className={styles.timelineSection}>
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
        <h2 className={styles.mainTitle}>슬기짜기와 함께할 분을 찾고 있어요</h2>

        {/* 원형 카드 섹션 */}
        <div className={styles.criteriaSection}>
          {criteriaItems.map((item, index) => (
            <div key={index} className={styles.criteriaCard}>
              {item}
            </div>
          ))}
        </div>

        {/* 모집 분야 섹션 */}
        <div className={styles.recruitmentSection}>
          <h3 className={styles.sectionTitle}>모집 분야</h3>

          {/* 디자이너 섹션 */}
          <div className={styles.fieldCard}>
            <div className={styles.fieldContent}>
              <h4 className={styles.fieldTitle}>디자이너</h4>
              <div className={styles.requirementsList}>
                <div className={styles.requirementsGroup}>
                  <div className={styles.requirementsTitle}>필수 요건</div>
                  <ul>
                    {designerRequirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.requirementsGroup}>
                  <div className={styles.requirementsTitle}>우대 사항</div>
                  <ul>
                    {designerPreferred.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 개발자 섹션 */}
          <div className={styles.fieldCard}>
            <div className={styles.fieldContent}>
              <h4 className={styles.fieldTitle}>개발자</h4>
              <div className={styles.requirementsList}>
                <div className={styles.requirementsGroup}>
                  <div className={styles.requirementsTitle}>필수 요건</div>
                  <ul>
                    {developerRequirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.requirementsGroup}>
                  <div className={styles.requirementsTitle}>우대 사항</div>
                  <ul>
                    {developerPreferred.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 지원하기 버튼 */}
        <div className={styles.buttonWrapper}>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc9EIMukZhMV2DV7ANwW4zCvJK5Al0mkPrmvRaWNl11U7fPmg/viewform?usp=header" target="_blank" className={styles.applyButton}>
            <span className={styles.applyButtonText}>지금 지원하기</span>
            <span className={styles.applyButtonSubtext}>구글 폼으로 이동</span>
          </Link>
        </div>
      </section>

      <Effect />
      <Footer />
    </>
  );
}
