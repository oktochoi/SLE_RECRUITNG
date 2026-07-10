'use client';

import { useEffect, useRef } from 'react';
import styles from './LandingWeave.module.css';

const BASELINE = 0.16;

/**
 * The landing page's single continuous signature thread — lives in the
 * right margin (never behind copy), and draws itself in as one
 * unbroken sequence tied to how far down the page you've scrolled.
 * It also eases in a first short stretch on load, so the hero isn't
 * left with an empty margin before the user starts scrolling.
 */
export default function LandingWeave() {
  const pathRef = useRef<SVGPathElement>(null);
  const knot1 = useRef<SVGCircleElement>(null);
  const knot2 = useRef<SVGCircleElement>(null);
  const knot3 = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let raf = 0;

    const setProgress = (progress: number) => {
      pathRef.current?.style.setProperty('--p', String(progress));

      [
        [knot1.current, 0.22],
        [knot2.current, 0.52],
        [knot3.current, 0.82],
      ].forEach(([el, threshold]) => {
        const node = el as SVGCircleElement | null;
        if (!node) return;
        node.classList.toggle(styles.lit, progress >= (threshold as number));
      });
    };

    const scrollProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const update = () => {
      raf = 0;
      setProgress(Math.max(BASELINE, scrollProgress()));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    // ease the first stretch in on mount instead of popping in instantly
    const start = performance.now();
    const duration = 1400;
    const introTick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.max(eased * BASELINE, scrollProgress()));
      if (t < 1) {
        requestAnimationFrame(introTick);
      }
    };
    requestAnimationFrame(introTick);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      className={styles.root}
      viewBox="0 0 120 600"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        className={styles.thread}
        pathLength="1"
        d="M60,0 C92,42 28,84 60,124 C92,164 28,204 60,244 C92,284 28,324 60,364 C92,404 28,444 60,484 C92,524 28,564 60,600"
      />
      <circle ref={knot1} className={styles.knot} cx="28" cy="84" r="4" />
      <circle ref={knot2} className={styles.knot} cx="92" cy="284" r="4" />
      <circle ref={knot3} className={styles.knot} cx="28" cy="444" r="4" />
    </svg>
  );
}
