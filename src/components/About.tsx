'use client';

import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>ABOUT SLEGIZZAGI</h2>

      {/* 첫 줄: 슬기롭게 + 텍스트 */}
     <div className={styles.row}>
        <div className={styles.aboutImageWrapper}>
            <Image
            src="/about1.svg"
            alt="슬기롭게"
            width={560} height={220}
            className={styles.aboutImage}
            />
        </div>

        <div className={styles.textBox}>
            <Image
            src="/about.svg"
            alt="슬기롭게"
            width={720} height={220}
            className={styles.aboutImage}
            />
        </div>
        </div>

        <div className={styles.about2Wrapper}>
        <Image
            src="/about2.svg"
            alt="SLE 설명 카드"
            width={840} height={380}
            className={styles.aboutImage}
        />
        </div>

        <div className={styles.about3Wrapper}>
        <Image
            src="/about3.svg"
            alt="뱀 이미지"
            width={560} height={380}
            className={styles.aboutImage}
        />
        </div>

    </section>
  );
}


