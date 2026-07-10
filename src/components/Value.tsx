import Image from 'next/image';
import styles from './Value.module.css';

const cards = [
  { src: '/Solve.svg', alt: 'Solve' },
  { src: '/Learn.svg', alt: 'Learn' },
  { src: '/Evolve.svg', alt: 'Evolve' },
];

export default function Value() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span className={styles.index}>01</span>
        <h2 className={styles.title}>SLEGIZZAGI&rsquo;S VALUES</h2>
      </div>

      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <div key={card.alt} className={styles.card}>
            <Image src={card.src} alt={card.alt} width={300} height={360} className={styles.cardImage} />
          </div>
        ))}
      </div>
    </section>
  );
}
