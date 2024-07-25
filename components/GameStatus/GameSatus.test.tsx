import React from 'react';
import { render, screen } from '@testing-library/react';
import { GameStatusContainer } from './GameStatus';

import '@testing-library/jest-dom';

describe('GameStatus component', () => {
  it('renders "Draw" when state is "draw"', () => {
    render(<GameStatusContainer state="draw" xIsNext={false} />);

    expect(screen.getByText('Draw')).toBeInTheDocument();
  });

  it('renders "Winner: X" when state is "X"', () => {
    render(<GameStatusContainer state="X" xIsNext={false} />);

    expect(screen.getByText('Winner: X')).toBeInTheDocument();
  });

  it('renders "Next player: X" when state is null and xIsNext is true', () => {
    render(<GameStatusContainer state={null} xIsNext={true} />);

    expect(screen.getByText('Next player: X')).toBeInTheDocument();
  });

  it('renders "Next player: O" when state is null and xIsNext is false', () => {
    render(<GameStatusContainer state={null} xIsNext={false} />);

    expect(screen.getByText('Next player: O')).toBeInTheDocument();
  });
});
