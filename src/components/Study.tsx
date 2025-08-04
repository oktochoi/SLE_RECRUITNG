import Image from 'next/image';
import styles from './Study.module.css';
import Link from 'next/link';

export default function StudySection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>SLEGIZZAGI'S STUDY</h2>

      <div className={styles.studyGrid}>
        <Image
          src="/study1.svg"
          alt="슬기짜기 설명 카드"
          width={1920}
          height={260}
          className={styles.image}
        />

        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            <Image
              src="/study2.svg"
              alt="슬기짜기 활동"
              width={2000}
              height={260}
              className={styles.sliderImage}
            />
            <Image
              src="/study2.svg"
              alt="슬기짜기 활동 복사본"
              width={2000}
              height={260}
              className={styles.sliderImage}
            />
          </div>
        </div>

      <Link href="/about">
        <Image
          src="/studyy3.svg"
          alt="동아리 소개 자세히보기"
          width={280}
          height={88}
          className={`${styles.image} ${styles.linkImage}`}
        />
      </Link>
      </div>
    </section>
  );
}
