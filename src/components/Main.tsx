import styles from './Main.module.css';

export default function Main() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.glow} aria-hidden="true" />

      <svg
        className={styles.sideThread}
        viewBox="0 0 120 600"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          className={styles.sideThreadPath}
          pathLength="1"
          d="M60,0 C30,50 92,100 60,150 C30,200 92,250 60,300 C30,350 92,400 60,450 C30,500 92,550 60,600"
        />
      </svg>

      <div className={styles.content}>
        <p className={styles.eyebrow}>HANDONG · CS CLUB</p>

        <h1 className={styles.wordmark}>
          SLEGIZZAGI
          <svg
            className={styles.mark}
            viewBox="0 0 70 46"
            fill="none"
            aria-hidden="true"
          >
            <path
              className={styles.markThread}
              pathLength="1"
              d="M2,36 C16,40 20,24 12,20 C4,16 10,4 24,6 C38,8 34,22 48,18 C58,15 60,10 66,4"
            />
            <circle className={styles.markKnot} cx="66" cy="4" r="3.4" />
          </svg>
        </h1>

        <p className={styles.description}>
          컴퓨터의 순우리말인 &lsquo;슬기셈틀&rsquo;과 &lsquo;짜다&rsquo;를 합쳐 만든 이름으로
          <br />
          컴퓨터를 이용해 할 수 있는 모든 것을 지향하는 동아리
        </p>
      </div>
    </section>
  );
}
