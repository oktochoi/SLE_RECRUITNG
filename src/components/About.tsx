import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <span className={styles.index}>02</span>
      <h2 className={styles.title}>슬기롭게</h2>
      <p className={styles.description}>
        문제를 해결하는 데 있어 지혜롭고 효율적인 접근을 추구합니다.
        <br />
        함께 성장하고 함께 배우는 커뮤니티입니다.
      </p>
    </section>
  );
}
