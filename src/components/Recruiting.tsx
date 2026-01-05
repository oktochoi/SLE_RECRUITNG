'use client';

import styles from './Recruiting.module.css';
import Link from 'next/link';

export default function Recruiting() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>RECRUITING</h2>
      <Link 
        href="https://docs.google.com/forms/d/e/1FAIpQLSc9EIMukZhMV2DV7ANwW4zCvJK5Al0mkPrmvRaWNl11U7fPmg/viewform?usp=header"
        className={styles.applyButton}
      >
        지금 지원하기
      </Link>
    </div>
  );
}
