import { BoardStatus } from '@/types/game';
import { calculateWinner, calculateAiMove } from './gameLogic';

describe('calculateWinner function', () => {
  it('should return null when there is no winner', () => {
    const board = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ] as BoardStatus;
    expect(calculateWinner(board)).toBeNull();
  });

  it('should return X as winner for horizontal win', () => {
    const board = [
      'X',
      'X',
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
    ] as BoardStatus;
    expect(calculateWinner(board)).toBe('X');
  });

  it('should return O as winner for vertical win', () => {
    const board = [
      'O',
      null,
      null,
      'O',
      null,
      null,
      'O',
      null,
      null,
    ] as BoardStatus;
    expect(calculateWinner(board)).toBe('O');
  });

  it('should return X as winner for diagonal win (top-left to bottom-right)', () => {
    const board = [
      'X',
      null,
      null,
      null,
      'X',
      null,
      null,
      null,
      'X',
    ] as BoardStatus;
    expect(calculateWinner(board)).toBe('X');
  });

  it('should return O as winner for diagonal win (top-right to bottom-left)', () => {
    const board = [
      null,
      null,
      'O',
      null,
      'O',
      null,
      'O',
      null,
      null,
    ] as BoardStatus;
    expect(calculateWinner(board)).toBe('O');
  });

  it('should return draw when the board is full', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'] as BoardStatus;
    expect(calculateWinner(board)).toBe('draw');
  });
});

describe('calculateAiMove function', () => {
  it('should return a random move', () => {
    const board = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ] as BoardStatus;
    const move = calculateAiMove(board);
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(9);
  });
  it('should return a empty move', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'X', null, 'X', 'O'] as BoardStatus;
    const move = calculateAiMove(board);
    expect(move).toBe(6);
  });
});
