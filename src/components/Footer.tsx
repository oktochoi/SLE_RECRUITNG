import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.mix}>
            <Image src="/logo.svg" alt="SLE 로고" width={80} height={30} />
            <div className={styles.right}>
                <Link href="/about">About</Link>
                <Link href="/archive">Archive</Link>
                <Link href="/recruiting">Recruiting</Link>
                <Link href="/qna">Q&A</Link>
            </div>
        </div>
        <p>okto@handong.ac.kr<br />sledatabase@gmail.com</p>
        <div className={styles.icons}>
        </div>
        <small>Copyright Slegizzagi All rights reserved.</small>
      </div>
    </footer>
  );
}
