import React, { FC } from 'react';
import styles from './Card.module.scss';

interface Props {
  joke:
  | {
    setup: string;
    delivery: string;
  }
  | string;
}

const Card: FC<Props> = ({ joke }) => {
  return (
    <div className={styles.container}>
      <div className="window">
        <div className="joke">
          <div className={styles.setup}>### {typeof joke !== 'string' ? joke?.setup : joke}</div>
          <div className={styles.delivery}>### {typeof joke !== 'string' ? joke?.delivery : joke}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
