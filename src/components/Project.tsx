import Image from 'next/image';
import Reveal from './Reveal';
import styles from './Project.module.css';
import Link from 'next/link';

const projects = [
  { src: '/project2.svg', alt: '프로젝트 1' },
  { src: '/project3.svg', alt: '프로젝트 2' },
  { src: '/project4.svg', alt: '프로젝트 3' },
  { src: '/project5.svg', alt: '프로젝트 4' },
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.heading}>
        <span className={styles.index}>04</span>
        <h2 className={styles.title}>
          SLEGIZZAGI&rsquo;S
          <br className="brMobile" />
          {' '}PROJECTS
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <p className={styles.headerDescription}>
          방학 프로젝트를 통해
          <br className="brMobile" />
          실전 경험을 쌓고 포트폴리오를 만듭니다.
          <br />
          각 개인이 직접 팀을 구성하고 팀원을 모집하여,
          <br className="brMobile" />
          기획서를 바탕으로 방학 동안 프로젝트를 진행합니다.
        </p>
      </Reveal>

      <div className={styles.cardGrid}>
        {projects.map((project, i) => (
          <Reveal key={project.src} className={styles.cell} delay={i * 100}>
            <Image src={project.src} alt={project.alt} width={380} height={380} className={styles.cellImage} />
          </Reveal>
        ))}
      </div>

      <div className={styles.footerButton}>
        <Link href="/project" className={styles.moreLink}>
          프로젝트 아카이브 전체보기 →
        </Link>
      </div>
    </section>
  );
}
