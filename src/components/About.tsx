'use client';

import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>

      {/* 첫 줄: 슬기롭게 + 텍스트 */}
     <div className={styles.row}>
        <div className={styles.aboutImageWrapper}>
            <Image
            src="/about11.svg"
            alt="슬기롭게"
            width={1920} height={220}
            className={styles.aboutImage}
            />
        </div>
        </div>

    </section>
  );
}


