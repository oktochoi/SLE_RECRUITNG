import Image from 'next/image';
import Reveal from './Reveal';
import styles from './Value.module.css';

const cards = [
  { src: '/Solve.svg', alt: 'Solve' },
  { src: '/Learn.svg', alt: 'Learn' },
  { src: '/Evolve.svg', alt: 'Evolve' },
];

export default function Value() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.heading}>
        <span className={styles.index}>01</span>
        <h2 className={styles.title}>
          SLEGIZZAGI&rsquo;S
          <br className="brMobile" />
          {' '}VALUES
        </h2>
      </Reveal>

      <div className={styles.cardGrid}>
        {cards.map((card, i) => (
          <Reveal key={card.alt} className={styles.card} delay={i * 100}>
            <Image src={card.src} alt={card.alt} width={300} height={360} className={styles.cardImage} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
