'use client';

import styles from './Recruiting.module.css';
import revealStyles from './Reveal.module.css';
import { useReveal } from './useReveal';
import Reveal from './Reveal';
import Link from 'next/link';

export default function Recruiting() {
  const { ref: linkRef, visible: linkVisible } = useReveal<HTMLAnchorElement>();

  return (
    <div className={styles.container}>
      <Reveal>
        <span className={styles.index}>05</span>
      </Reveal>

      <Link
        ref={linkRef}
        href="https://docs.google.com/forms/d/e/1FAIpQLSdlDESVuVbGKyD5_qKnBzhK8FgwcuNAkSsoUgstiv62Qostpg/viewform?usp=dialog"
        className={`${styles.applyLink} ${revealStyles.reveal} ${linkVisible ? revealStyles.visible : ''}`}
        style={{ animationDelay: '80ms' }}
      >
        <span className={styles.applyLine}>지금,</span>
        <span className={styles.applyLine}>
          지원<span className={styles.accent}>하세요</span>
        </span>
      </Link>

      <Reveal delay={160}>
        <span className={styles.sub}>SLEGIZZAGI RECRUITING — 지원하기 →</span>
      </Reveal>
    </div>
  );
}
