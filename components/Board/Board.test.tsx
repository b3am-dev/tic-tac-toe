import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Board } from './Board';
import * as gameLogic from '@/utils/gameLogic';

import '@testing-library/jest-dom';

jest.mock('../../utils/gameLogic', () => ({
  calculateWinner: jest.fn(),
}));

describe('Board Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the game board and initial status', () => {
    render(<Board />);

    // Check for GameStatus component
    expect(screen.getByText(/Next player:/i)).toBeInTheDocument();

    // Check for 9 cell components (specifically by their class name)
    const cells = screen.getAllByRole('button', { name: '' }); // Only get cells with empty name
    expect(cells).toHaveLength(9);

    // Assert that the reset button is also rendered
    expect(screen.getByText('Reset Game')).toBeInTheDocument();
  });

  it('handles cell clicks and updates the board', () => {
    render(<Board />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('X');

    fireEvent.click(screen.getAllByRole('button')[1]);
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('O');
  });

  it('declares a winner and prevents further clicks', () => {
    const mockCalculateWinner = jest.spyOn(gameLogic, 'calculateWinner');
    mockCalculateWinner.mockReturnValue('X'); // Mock a win for 'X'

    render(<Board />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getAllByRole('button')[1]);

    expect(screen.getByText(/Winner:/i)).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button')[2]);
    expect(screen.getAllByRole('button')[2]).toHaveTextContent(''); // Should still be empty
  });

  it('resets the game', () => {
    render(<Board />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getAllByRole('button')[1]);

    fireEvent.click(screen.getByText('Reset Game'));

    const cells = screen.getAllByRole('button', { name: '' }); // Only get cells with empty name
    cells.forEach((cell) => expect(cell).toHaveTextContent(''));
  });
});
