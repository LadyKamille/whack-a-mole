import { useState } from 'react';
import { Square } from '../Square/Square';
import { ISquare } from '../Square/Square.interface';
import styles from './Board.module.css';

export const Board = () => {
  const grid = Array.from(Array(9),
    (_, index) => ({id: index + 1, hasMole: false}));
  const [squares, setSquares] = useState(grid);

  const onClickHandler = (item: ISquare): void => {
    setSquares(
      squares.map((square: ISquare) => (
        item.id === square.id ? item : square
      ))
    );
  };

  return (
    <div className={styles.board}>
      {
        squares.map((square) => (
          <Square key={square.id} mole={ square } onClickHandler={onClickHandler}/>
        ))
      }
    </div>
  )
}
