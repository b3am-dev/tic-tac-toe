'use client';

import React from 'react';
import { Square } from '@/types/game';

import styles from './Cell.module.css';

interface CellProps {
  value: Square;
  onClick: () => void;
}

export const Cell: React.FC<CellProps> = ({ value, onClick }) => (
  <button disabled={!!value} className={styles.cell} onClick={onClick}>
    {value}
  </button>
);
