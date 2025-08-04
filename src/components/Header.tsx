'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Image src="/Logo.svg" alt="SLE Logo" width={64} height={24} />
      </Link>

      <nav className={styles.navbar}>
        <Link href="/about" className={styles.menuItem}>
          <div className={styles.menuText}>About</div>
        </Link>
        <Link href="/project" className={styles.menuItem}>
          <div className={styles.menuText}>Archive</div>
        </Link>
        <Link href="/recruiting" className={styles.menuItem}>
          <div className={styles.menuText}>Recruiting</div>
        </Link>
        <Link href="/qna" className={styles.menuItem}>
          <div className={styles.menuText}>Q&A</div>
        </Link>
      </nav>
    </header>
  );
}
