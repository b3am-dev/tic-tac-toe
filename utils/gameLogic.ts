import { type BoardStatus, GameStatus } from '@/types/game';

export function calculateWinner(squares: BoardStatus): GameStatus {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      return null;
    }
  }
  return 'draw';
}

export function calculateAiMove(squares: BoardStatus): number {
  const emptySquares = [];

  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      emptySquares.push(i);
    }
  }

  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}
