'use client';

import Image from 'next/image';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/MainPage.svg"
        alt="snake background"
        fill
        className={styles.backgroundImage}
      />
    <div className={styles.gradientOverlay}></div> 
      <div className={styles.content}>
        <Image
          src="/slegizzagi.svg"
          alt="슬기짜기"
          width={400}
          height={100}
          className={styles.titleImage}
        />
        <span className={styles.description}>
          컴퓨터의 순우리말인 ‘슬기셈틀'과 ‘짜다'를 합쳐 만든 이름으로 <br />
          컴퓨터를 이용해 할 수 있는 모든 것을 지향하는 동아리
        </span>
      </div>
    </div>
  );
}
