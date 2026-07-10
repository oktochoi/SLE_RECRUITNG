'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logoContainer}>
        <span className={styles.logoText}>SLE</span>
      </Link>

      <nav className={styles.navbar}>
        <Link href="/about" className={styles.menuItem}>
          <span className={styles.menuText}>About</span>
        </Link>
        <Link href="/project" className={styles.menuItem}>
          <span className={styles.menuText}>Archive</span>
        </Link>
        <Link href="/recruiting" className={styles.menuItem}>
          <span className={styles.menuText}>Recruiting</span>
        </Link>
        <Link href="/qna" className={styles.menuItem}>
          <span className={styles.menuText}>Q&A</span>
        </Link>
      </nav>
    </header>
  );
}
