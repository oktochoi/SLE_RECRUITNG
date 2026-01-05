import Image from 'next/image';
import styles from './Project.module.css';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>SLEGIZZAGI'S PROJECTS</h2>
      <div className={styles.headerText}>
        <p className={styles.headerDescription}>
          방학 프로젝트를 통해 실전 경험을 쌓고 포트폴리오를 만듭니다.<br />
          각 개인이 직접 팀을 구성하고 팀원을 모집하여, 자신이 작성한 기획서를 바탕으로 방학 동안 프로젝트를 진행합니다.
        </p>
      </div>

      {/* 프로젝트 카드 */}
      <div className={styles.cardGrid}>
        <Image
          src="/project2.svg"
          alt="프로젝트 3"
          width={340}
          height={340}
        />
        <Image
          src="/project3.svg"
          alt="프로젝트 4"
          width={340}
          height={340}
        />
        <Image
          src="/project4.svg"
          alt="프로젝트 5"
          width={340}
          height={340}
        />
        <Image
          src="/project5.svg"
          alt="프로젝트 5"
          width={340}
          height={340}
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
