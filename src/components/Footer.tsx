import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.mix}>
            <span className={styles.logoText}>SLEGIZZAGI</span>
            <div className={styles.right}>
                <Link href="/about">About</Link>
                <Link href="/archive">Archive</Link>
                <Link href="/recruiting">Recruiting</Link>
                <Link href="/qna">Q&A</Link>
            </div>
        </div>
        <p>okto@handong.ac.kr<br />sledatabase@gmail.com</p>
        <small>Copyright Slegizzagi All rights reserved.</small>
      </div>
    </footer>
  );
}
