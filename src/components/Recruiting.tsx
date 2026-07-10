import styles from './Recruiting.module.css';
import Link from 'next/link';

export default function Recruiting() {
  return (
    <div className={styles.container}>
      <span className={styles.index}>05</span>

      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdlDESVuVbGKyD5_qKnBzhK8FgwcuNAkSsoUgstiv62Qostpg/viewform?usp=dialog"
        className={styles.applyLink}
      >
        <span className={styles.applyLine}>지금,</span>
        <span className={styles.applyLine}>
          지원<span className={styles.accent}>하세요</span>
        </span>
      </Link>

      <span className={styles.sub}>SLEGIZZAGI RECRUITING — 지원하기 →</span>
    </div>
  );
}
