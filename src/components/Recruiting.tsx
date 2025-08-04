'use client';

import Image from 'next/image';
import styles from './Recruiting.module.css';
import Link from 'next/link';

export default function Recruiting() {
  return (
    <div className={styles.container}>
      <Image src="/Recruit.svg" alt="type" width={1920} height={40} />
      <Link href="/recruiting">
            <Image src="/Recruit2.svg" alt="button" width={280} height={88} />
      </Link>
    </div>
  );
}
