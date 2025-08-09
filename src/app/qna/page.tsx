"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./qna.module.css";
import Effect from "@/components/Effect";

export default function QAPage() {
  const faqs = [
    {
      id: 0,
      question: "실력이 부족해도 괜찮을까요?",
      answer: "물론입니다! 슬기짜기는 열정과 성장 가능성을 더 중요하게 봅니다."
    },
    {
      id: 1,
      question: "지원 시 필요한 조건이 있을까요?",
      answer: "슬기짜기에 정해진 조건은 없습니다. 열정만 있으면 누구나 환영입니다!"
    },
    {
      id: 2,
      question: "어떤 활동들을 하나요?",
      answer: "매주 화요일 정모, 스터디, 아웃팅, 방학 프로젝트 등 다양한 활동을 진행합니다."
    },
    {
      id: 3,
      question: "비전공자도 참여할 수 있나요?",
      answer: "네! 슬기짜기는 누구에게나 열려 있습니다."
    },
    {
      id: 4,
      question: "활동은 얼마나 자주 하나요?",
      answer: "주 1회 화요일 7:00~8:30 정기 모임이 있으며, 스터디 진행에 따라 유동적입니다."
    }
  ];

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <h2 className={styles.title}>Q&amp;A</h2>
        <p className={styles.subtitle}>Get your answers here!</p>

        <div className={styles.accordionList}>
          {faqs.map((faq) => (
            <details key={faq.id} className={styles.accordionItem}>
              <summary className={styles.accordionButton}>
                {faq.question}
              </summary>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className={styles.bottomBox}>
          <h3 className={styles.bottomTitle}>Q&amp;A로 해결되지 않으셨다면?</h3>
          <p className={styles.bottomText}>
            기타 문의 사항 / 자세한 정보 등이 필요한 분을 위해!<br />
            슬기짜기가 직접 보고 바로 답변드려요.<br />
            아래 노션 링크에 편하게 남겨주세요.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="https://open.kakao.com/o/gzqGyCLh" target="_blank">
              <Image
                src="/mu.svg"
                alt="질문방"
                width={280}
                height={88}
                className={styles.button}
              />
            </Link>
          </div>
        </div>
      </section>
        <Effect/>
      <Footer />
    </>
  );
}
