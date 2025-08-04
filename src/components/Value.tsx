'use client';

import Image from 'next/image';
import styles from './Value.module.css';
import { useState } from 'react';

export default function Value() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

 const cards = [
    {
      default: '/S.svg',
      hover: '/Solve.svg',
      alt: 'S',
      defaultSize: { width: 100, height: 160 },
      hoverSize: { width: 300, height: 360 },
    },
    {
      default: '/L.svg',
      hover: '/Learn.svg',
      alt: 'L',
      defaultSize: { width: 100, height: 160 },
      hoverSize: { width: 300, height: 360 },
    },
    {
      default: '/E.svg',
      hover: '/Evolve.svg',
      alt: 'E',
      defaultSize: { width: 100, height: 160 },
      hoverSize: { width: 300, height: 360 },
    },
  ];
 return (
    <section className={styles.section}>
      <h2 className={styles.title}>SLEGIZZAGI'S VALUES</h2>

      <div className={styles.cardGrid}>
        {cards.map((card, index) => {
          const isHovered = hoveredIndex === index;
          const size = isHovered ? card.hoverSize : card.defaultSize;
          const src = isHovered ? card.hover : card.default;

          return (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={src}
                alt={card.alt}
                width={size.width}
                height={size.height}
                style={{ objectFit: 'contain', transition: 'all 0.2s ease' }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}