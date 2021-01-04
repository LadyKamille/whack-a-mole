import { useState } from 'react';
import { Square } from '../Square/Square';
import styles from './Board.module.css';

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill({hasMole: true}));

  return (
    <div className={styles.board}>
      {
        squares.map((square) => (
          <Square hasMole={ square.hasMole }/>
        ))
      }
    </div>
  )
}
