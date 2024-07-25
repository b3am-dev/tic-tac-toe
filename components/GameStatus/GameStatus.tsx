'use client';

import React from 'react';
import { type GameStatus } from '@/types/game';

import styles from './GameStatus.module.css';

interface GameStatusProps {
  state: GameStatus;
  xIsNext: boolean;
}

export const GameStatusContainer: React.FC<GameStatusProps> = ({
  state,
  xIsNext,
}) => {
  const nextPlayer = xIsNext ? 'X' : 'O';
  if (state) {
    return (
      <p className={styles.status}>
        {state === 'draw' ? 'Draw' : `Winner: ${state}`}
      </p>
    );
  }
  return <p className={styles.status}>Next player: {nextPlayer}</p>;
};
