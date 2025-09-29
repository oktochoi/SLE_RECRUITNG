import styles from './RecruitingPage.module.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effect from "@/components/Effect";
import Image from "next/image";
import Link from "next/link";

export default function RecruitingPage() {
  // 🎯 마감일 지정 (YYYY-MM-DD 형식)
  const deadline = new Date("2025-08-27");
  const today = new Date();

  // 🔄 남은 날짜 계산 (올림 처리)
  const remainingDays = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // 숫 두 자리로 자르기
  const firstDigit = Math.floor(remainingDays / 10);
  const secondDigit = remainingDays % 10;

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Image
          src="/rc1.svg"
          alt="배경"
          fill
          className={styles.background}
          priority
        />

          <div className={styles.content}>
            <h2 className={styles.title}>현재는 지원을 받고 있지 않습니다.</h2>
            {/* 
            <h2 className={styles.title}>슬기짜기 리쿠르팅</h2>

            <div className={styles.days}>
              <span className={styles.subtitle}>지원 마감까지&nbsp;</span>
              <span className={styles.box}>0</span>
              <span className={styles.box}>0</span>
              <span className={styles.subtitle}>일</span>
            */}
            </div>

            <div className={styles.buttonWrapper}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc9EIMukZhMV2DV7ANwW4zCvJK5Al0mkPrmvRaWNl11U7fPmg/viewform?usp=header" target="_blank">
                <Image
                  src="/rc2.svg"
                  alt="지금 지원하기"
                  width={280}
                  height={88}
                  className={styles.button}
                />
              </Link>
            </div>
          </div>

      </section>

      <Effect />


          <div className={styles.centerImageWrapper}>
            <Image
              src="/rc3.svg"
              alt="사진"
              width={1920}
              height={880}
              className={styles.centerImage}
            />
          </div>


          <div className={styles.buttonWrapper}>
            <Link href="https://slegizzagi.vercel.app/" target="_blank">
              <Image
                src="/rc2.svg"
                alt="지금 지원하기"
                width={280}
                height={88}
                className={styles.button}
              />
            </Link>
          </div>
          <Effect />
      <Footer />
    </>
  );
}
