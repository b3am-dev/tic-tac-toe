'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Cell } from '@/components/Cell';
import { GameStatus } from '@/components/GameStatus';
import { Spinner } from '@/components/Spinner';
import { type BoardStatus } from '@/types/game';
import { calculateWinner, calculateAiMove } from '@/utils/gameLogic';

import styles from './Board.module.css';

export interface BoardProps {
  hasAIPlayer?: boolean;
}

export const Board: React.FC<BoardProps> = ({ hasAIPlayer = false }) => {
  const [board, setBoard] = useState<BoardStatus>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(false);

  const isAITurn = hasAIPlayer && !xIsNext;

  const winner = calculateWinner(board);

  const handleClick = useCallback(
    (index: number) => {
      if (winner || board[index]) return; // Prevent clicks on taken or winning cells

      const newBoard = [...board];
      newBoard[index] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    },
    [board, winner, xIsNext]
  );

  useEffect(() => {
    if (isAITurn && !winner) {
      setLoadingProgress(true);
      const aiMoveIndex = calculateAiMove(board);

      setTimeout(() => {
        setLoadingProgress(false);
        handleClick(aiMoveIndex);
      }, 1000);
    }
  }, [board, xIsNext, winner, isAITurn, handleClick]);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <div className={styles.status}>
        <GameStatus state={winner} xIsNext={xIsNext} />
        {loadingProgress && <Spinner />}
      </div>
      <div className={styles.board}>
        {board.map((square, index) => (
          <Cell
            key={index}
            value={square}
            onClick={() => !isAITurn && handleClick(index)}
          />
        ))}
      </div>
      <button className={styles.resetButton} onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};
