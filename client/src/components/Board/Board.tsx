import { Square } from '../Square/Square';
import styles from './Board.module.css';
import { IBoardProps } from './Board.interface';

export const Board = ({squares, onSquareClick} : IBoardProps) => (
  <div className={styles.board}>
    {
      squares.map((square) => (
        <Square key={square.id} mole={ square } onClickHandler={onSquareClick}/>
      ))
    }
  </div>
);
