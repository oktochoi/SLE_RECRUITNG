"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./qna.module.css";
import Effect from "@/components/Effect";
import Weave from "@/components/Weave";
import { useState } from "react";

export default function QAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 0,
      question: "실력이 부족해도 지원해도 될까요?",
      answer:
        "네, 충분합니다. 슬기짜기는 지금 당장 잘하는 사람보다, AI로 무언가를 해보고 싶고 함께 성장하려는 사람을 더 중요하게 봅니다. 사전 지식이나 포트폴리오가 없어도 괜찮아요. 배우고 실험해보고 싶은 마음만 있다면 환영합니다."
    },
    {
      id: 1,
      question: "어떤 사람을 뽑나요? 지원 조건이 있나요?",
      answer:
        "경력이나 스펙을 보고 뽑지 않습니다. AI로 함께 만들고 실험해보고 싶은 분을 찾아요. 기획 · 디자인 · 개발 중 관심 있는 역할로 지원하시면 됩니다. 다만 매주 화요일 19:00–20:30 정기 모임에 참여 가능한 분을 기준으로 합니다."
    },
    {
      id: 2,
      question: "비전공자·타 전공도 지원할 수 있나요?",
      answer:
        "가능합니다. 컴퓨터공학 전공이 아니어도, 만들고 싶은 것이 있고 AI를 도구로 써보고 싶다면 지원하셔도 됩니다. 역할도 개발자뿐 아니라 기획자, 디자이너로도 열려 있어요."
    },
    {
      id: 3,
      question: "평소에 어떤 활동을 하나요?",
      answer:
        "매주 화요일 정기 모임에서 소식을 나누고, 학년·관심사별 스터디와 개인이 제안하는 자율 스터디를 진행합니다. 방학에는 팀을 꾸려 프로젝트를 만들고, 학기 중에는 아웃팅과 슬년회 같은 교류 활동도 있어요. 올해는 특히 AI로 무언가를 시도해보는 활동을 중심으로 합니다."
    },
    {
      id: 4,
      question: "활동 부담은 어느 정도인가요?",
      answer:
        "정기 모임은 주 1회, 화요일 19:00–20:30입니다. 스터디와 프로젝트는 팀·주제에 따라 유동적이에요. 무리하게 시간을 강요하기보다, 꾸준히 참여하며 같이 결과물을 만드는 쪽을 지향합니다."
    },
    {
      id: 5,
      question: "지원은 어떻게 하고, 선발 과정은 어떻게 되나요?",
      answer:
        "서류 모집은 08/21(금)부터 09/09(수)까지입니다. 구글 폼으로 지원하신 뒤, 09/09(수) 서류 합격 발표 → 09/10(목)–09/12(토) 대면 면접 → 09/14(월) 최종 합격 발표 순으로 진행됩니다. 일정과 지원 링크는 Recruiting 페이지에서 확인할 수 있어요."
    },
    {
      id: 6,
      question: "면접에서는 무엇을 보나요?",
      answer:
        "정답을 맞히는 시험이 아닙니다. 왜 지원했는지, AI로 무엇을 해보고 싶은지, 동아리에서 어떻게 함께하고 싶은지를 중심으로 이야기 나눕니다. 긴장하지 마시고, 본인의 관심과 생각을 편하게 들려주세요."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Weave className={styles.weave} />
        <span className={styles.eyebrow}>FAQ</span>
        <h1 className={styles.title}>Q&amp;A</h1>
        <p className={styles.subtitle}>
          지원 전에 궁금한 점을 모았어요.<br />
          여기에 없는 내용은 아래 질문방에서 바로 물어봐 주세요.
        </p>

        <div className={styles.accordionList}>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.accordionHeader}>
                <span className={styles.questionNumber}>Q{index + 1}</span>
                <div className={styles.accordionButton}>
                  {faq.question}
                </div>
                <div className={`${styles.accordionIcon} ${openIndex === index ? styles.rotated : ''}`}>
                  +
                </div>
              </div>
              <div className={`${styles.answerContainer} ${openIndex === index ? styles.open : ''}`}>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomBox}>
          <span className={styles.index}>MORE</span>
          <h3 className={styles.bottomTitle}>아직 궁금한 점이 남았다면</h3>
          <p className={styles.bottomText}>
            슬기짜기 질문방에서 운영진이 직접 답변드려요.<br />
            지원 전 가벼운 질문도 언제든 환영합니다.
          </p>
          <Link href="https://open.kakao.com/o/gdEDhLJi" target="_blank" className={styles.linkButton}>
            카카오톡 질문방 바로가기 →
          </Link>
        </div>
      </section>
      <Effect/>
      <Footer />
    </>
  );
}
