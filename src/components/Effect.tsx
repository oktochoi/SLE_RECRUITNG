import React from 'react';
import styles from './Effect.module.css'; // CSS Module 사용 시

const Effect: React.FC = () => {
  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>
            RECRUITING <em>02/23(월) ~ 03/11(수)</em>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Effect;
