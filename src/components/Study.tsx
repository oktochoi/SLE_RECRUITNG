'use client';

import Image from 'next/image';
import styles from './Study.module.css';
import Link from 'next/link';
import Reveal from './Reveal';
import revealStyles from './Reveal.module.css';
import { useReveal } from './useReveal';

export default function StudySection() {
  const techStack = ['C/C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'Git & 협업 툴', 'Figma'];
  const { ref: moreButtonRef, visible: moreButtonVisible } = useReveal<HTMLAnchorElement>();

  return (
    <section className={styles.section}>
      <Reveal className={styles.heading}>
        <span className={styles.index}>03</span>
        <h2 className={styles.title}>SLEGIZZAGI&rsquo;S STUDY</h2>
      </Reveal>

      <div className={styles.studyGrid}>
        <div className={styles.studyMain}>
          <Reveal className={styles.studyCard}>
            <h3 className={styles.cardTitle}>슬기짜기 스터디</h3>
            <p className={styles.cardText}>
              슬기짜기에서는 학년별 필수 스터디, 직군별 필수 스터디를 진행합니다.
            </p>
            <p className={styles.cardText}>
              개인이 주도하는 개별 자율 스터디, 수준별·관심사별로 활동하는 스터디 등 다양한 스터디를 운영 중입니다.
            </p>
            <p className={styles.cardText}>
              누구나 원하는 주제를 제안하고, 함께 학습하며 실력을 키울 수 있습니다.
            </p>
          </Reveal>

          <Reveal className={styles.studyCard} delay={100}>
            <h3 className={styles.cardTitle}>슬년회</h3>
            <p className={styles.cardText}>
              방학 프로젝트의 마지막 주 마지막 날에는 슬년회가 열립니다.
            </p>
            <p className={styles.cardText}>
              완성된 프로젝트를 발표하고, 슬기짜기 OB 선배님들과 만나 피드백을 받고 경험을 나누는 소중한 자리입니다.
            </p>
          </Reveal>
        </div>

        <Reveal className={styles.techSection}>
          <span className={styles.techLabel}>진행 중 / 예정된 스터디</span>
          <div className={styles.techGrid}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            <Image
              src="/study2.svg"
              alt="슬기짜기 활동"
              width={2000}
              height={260}
              className={styles.sliderImage}
              style={{ width: 'auto', height: 'auto', maxHeight: '260px' }}
              priority
              unoptimized
            />
            <Image
              src="/meeting.jpg"
              alt="정기 모임"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            <Image
              src="/study.jpg"
              alt="스터디"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            <Image
              src="/project.jpg"
              alt="프로젝트"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            <Image
              src="/outting.jpg"
              alt="아웃팅"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            {/* 반복을 위한 복사본 */}
            <Image
              src="/study2.svg"
              alt="슬기짜기 활동"
              width={2000}
              height={260}
              className={styles.sliderImage}
              style={{ width: 'auto', height: 'auto', maxHeight: '260px' }}
              unoptimized
            />
            <Image
              src="/meeting.jpg"
              alt="정기 모임"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            <Image
              src="/study.jpg"
              alt="스터디"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            <Image
              src="/project.jpg"
              alt="프로젝트"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
            <Image
              src="/outting.jpg"
              alt="아웃팅"
              width={400}
              height={300}
              className={styles.sliderImage}
            />
          </div>
        </Reveal>

        <Link
          ref={moreButtonRef}
          href="/about"
          className={`${styles.moreButton} ${revealStyles.reveal} ${moreButtonVisible ? revealStyles.visible : ''}`}
        >
          동아리 소개 자세히보기 →
        </Link>
      </div>
    </section>
  );
}
