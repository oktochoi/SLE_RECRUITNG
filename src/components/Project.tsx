import Image from 'next/image';
import styles from './Project.module.css';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>SLEGIZZAGI’S PROJECTS</h2>
      <div className={styles.headerImages}>
        <Image
          src="/project1.svg"
          alt="프로젝트 소개 상단 1"
          width={1920}
          height={80}
        />
      </div>

      {/* 프로젝트 카드 */}
      <div className={styles.cardGrid}>
        <Image
          src="/project2.svg"
          alt="프로젝트 3"
          width={380}
          height={380}
        />
        <Image
          src="/project3.svg"
          alt="프로젝트 4"
          width={380}
          height={380}
        />
        <Image
          src="/project4.svg"
          alt="프로젝트 5"
          width={380}
          height={380}
        />
        <Image
          src="/project5.svg"
          alt="프로젝트 5"
          width={380}
          height={380}
        />
      </div>

      {/* 하단 버튼 이미지 */}
      <div className={styles.footerButton}>
        <Link href="/project">
            <Image
            src="/project6.svg"
            alt="프로젝트 더보기 버튼"
            width={280}
            height={88}
            className={styles.clickable}
            />
        </Link>
      </div>
    </section>
  );
}
