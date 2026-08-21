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
        href="https://forms.gle/3SZQCQ5ymR36RH2u8"
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
