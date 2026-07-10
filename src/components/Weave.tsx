'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Weave.module.css';

/**
 * The site's one recurring signature motion: a few strands that draw
 * themselves in like something being woven, then hold still (with a
 * slow idle breathing motion) until the accent strand reacts to the
 * first real interaction.
 */
export default function Weave({ className }: { className?: string }) {
  const [active, setActive] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const trigger = () => {
      if (done.current) return;
      done.current = true;
      setActive(true);
    };
    window.addEventListener('mousemove', trigger, { passive: true, once: true });
    window.addEventListener('scroll', trigger, { passive: true, once: true });
    window.addEventListener('touchstart', trigger, { passive: true, once: true });
    return () => {
      window.removeEventListener('mousemove', trigger);
      window.removeEventListener('scroll', trigger);
      window.removeEventListener('touchstart', trigger);
    };
  }, []);

  return (
    <svg
      className={`${styles.root} ${active ? styles.active : ''} ${className ?? ''}`}
      viewBox="0 0 240 240"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden="true"
    >
      <g className={styles.idle}>
        <path
          className={styles.strandA}
          pathLength="1"
          d="M6,60 C70,10 110,10 130,50 C150,90 90,100 70,140 C50,180 110,200 160,180 C200,164 210,120 234,110"
        />
        <path
          className={styles.strandB}
          pathLength="1"
          d="M20,200 C60,140 60,80 30,30 C70,60 120,60 140,30 C160,60 150,110 200,120 C224,126 232,140 236,160"
        />
        <path
          className={styles.strandD}
          pathLength="1"
          d="M40,4 C40,60 100,70 90,120 C80,170 20,170 34,236"
        />
        <path
          className={styles.strandC}
          pathLength="1"
          d="M2,150 C50,130 80,150 96,110 C112,70 90,40 120,10 C150,40 140,90 180,100 C210,108 220,150 238,190"
        />
        <circle className={styles.knot} cx="130" cy="50" r="3.4" />
        <circle className={styles.knot} cx="96" cy="110" r="3.4" />
        <circle className={styles.knot} cx="180" cy="100" r="3.4" />
      </g>
    </svg>
  );
}
