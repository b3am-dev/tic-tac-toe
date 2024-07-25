import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Cell } from '.';

import '@testing-library/jest-dom';

describe('Cell component', () => {
  it('renders with the correct value', () => {
    render(<Cell value="X" onClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('X');
  });

  it('renders with empty value', () => {
    render(<Cell value={null} onClick={() => {}} />); // Empty cell
    expect(screen.getByRole('button')).toHaveTextContent('');
  });

  it('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    render(<Cell value={null} onClick={onClickMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
