import React from 'react';
import styles from './Effect.module.css'; // CSS Module 사용 시

const Effect: React.FC = () => {
  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>RECRUITING 08/18(월) ~ 09/10(수)</span>
        ))}
      </div>
    </div>
  );
};

export default Effect;
