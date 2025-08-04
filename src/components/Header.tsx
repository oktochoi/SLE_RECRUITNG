'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <a className={styles.logoContainer}>
          <Image src="/Logo.svg" alt="SLE Logo" width={64} height={24} />
        </a>
      </Link>

      <nav className={styles.navbar}>
        <Link href="/about" legacyBehavior>
          <a className={styles.menuItem}>
            <div className={styles.menuText}>About</div>
          </a>
        </Link>
        <Link href="/archive" legacyBehavior>
          <a className={styles.menuItem}>
            <div className={styles.menuText}>Archive</div>
          </a>
        </Link>
        <Link href="/recruiting" legacyBehavior>
          <a className={styles.menuItem}>
            <div className={styles.menuText}>Recruiting</div>
          </a>
        </Link>
        <Link href="/qna" legacyBehavior>
          <a className={styles.menuItem}>
            <div className={styles.menuText}>Q&A</div>
          </a>
        </Link>
      </nav>
    </header>
  );
}
