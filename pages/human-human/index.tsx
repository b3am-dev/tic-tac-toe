import { NextPage } from 'next';
import Link from 'next/link';

import { Board } from '@/components/Board';
import LeftArrow from '@/assets/left-arrow-angle-svgrepo-com.svg';
import styles from '@/styles/Game.module.css';

const Game: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <Link className={styles.backButton} href="/">
          <LeftArrow
            style={{ fill: '#bdc0cf', width: '16px', height: '16px' }}
          />
          Back
        </Link>
        <Board hasAIPlayer={false} />
      </div>
    </div>
  );
};

export default Game;
