"use client";

import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Effect from "@/components/Effect";
import Weave from "@/components/Weave";
import Image from "next/image";
import styles from './about.module.css';

export default function AboutPage() {
  const values = [
    {
      title: "슬기롭게",
      description: "문제를 해결하는 데 있어 지혜롭고 효율적인 접근을 추구합니다."
    },
    {
      title: "함께 성장",
      description: "개인의 성장뿐만 아니라 팀원들과 함께 성장하는 문화를 만들어갑니다."
    },
    {
      title: "열정과 도전",
      description: "새로운 기술과 프로젝트에 대한 열정으로 끊임없이 도전합니다."
    }
  ];

  const activities = [
    {
      image: "/meeting.jpg",
      title: "정기 모임",
      description: "매주 화요일 7:00–8:30 정기 모임에서 자유롭게 소통하며 정보를 나눕니다. 정모를 통해 친목을 쌓고, 부담 없이 IT 교양을 배워갑니다."
    },
    {
      image: "/study.jpg",
      title: "스터디",
      description: "다양한 주제의 스터디를 통해 함께 학습하고 성장합니다. 학년별 커리큘럼에 따라 1학년 1학기에는 프론트엔드, 1학년 2학기에는 C 언어, 2학년 1학기에는 자료구조, 2학년 2학기에는 프론트엔드 심화 스터디를 진행합니다.."
    },
    {
      image: "/project.jpg",
      title: "프로젝트",
      description: "방학 프로젝트를 통해 실전 경험을 쌓고 포트폴리오를 만듭니다. 각 개인이 직접 팀을 구성하고 팀원을 모집하여, 자신이 작성한 기획서를 바탕으로 방학 동안 프로젝트를 진행합니다."
    },
    {
      image: "/outting.jpg",
      title: "아웃팅",
      description: "정기적인 아웃팅을 통해 식사, 문화 활동, 야외 활동 등을 함께하며 친목을 다지고 자연스럽게 네트워킹을 형성합니다."
    }
  ];

  return (
    <>
      <Header />

      <section className={styles.hero}>
        <Weave className={styles.weave} />
        <span className={styles.eyebrow}>ABOUT</span>
        <h1 className={styles.heroTitle}>슬기짜기</h1>
        <p className={styles.heroDescription}>
          한동대학교 컴퓨터공학과 동아리 슬기짜기는<br />
          함께 성장하고 함께 배우는 공간입니다.
        </p>
      </section>

      <Effect />

      <section className={styles.valuesSection}>
        <div className={styles.heading}>
          <span className={styles.index}>01</span>
          <h2 className={styles.sectionTitle}>우리의 가치</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <span className={styles.valueNum}>0{index + 1}</span>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.activitiesSection}>
        <div className={styles.heading}>
          <span className={styles.index}>02</span>
          <h2 className={styles.sectionTitle}>주요 활동</h2>
        </div>
        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.activityImageWrapper}>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={400}
                  height={300}
                  className={styles.activityImage}
                />
              </div>
              <h3 className={styles.activityTitle}>{activity.title}</h3>
              <p className={styles.activityDescription}>{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <Weave className={styles.aboutWeave} />
        <span className={styles.index}>03</span>
        <h2 className={styles.aboutTitle}>함께 만들어가는<br />슬기짜기</h2>
        <p className={styles.aboutText}>
          슬기짜기는 단순한 동아리가 아닌, 함께 성장하고 함께 배우는 커뮤니티입니다.<br />
          우리는 실력보다 열정을, 경험보다 성장 가능성을 더 중요하게 생각합니다.<br />
          새로운 도전을 두려워하지 않고, 함께 해결해나가는 것이 슬기짜기의 정신입니다.
        </p>
      </section>

      <Effect />
      <Footer />
    </>
  );
}
