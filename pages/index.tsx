import { NextPage } from 'next';

import styles from './index.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Choose the game mode
      <Link href="/human-human" className={styles.button}>
        Human vs Human
      </Link>
      <Link href="/human-computer" className={styles.button}>
        Human vs Computer
      </Link>
    </div>
  );
};

export default Home;
