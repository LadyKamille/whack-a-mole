import styles from './Square.module.css';
import { ISquareProps } from './Square.interface';

export const Square = ({ mole, onClickHandler}: ISquareProps) => (
 <button className={ styles.square }>
    {
      mole.hasMole ?
        <img src="/mole.png" alt="mole" onClick={() => onClickHandler(mole)}/> :
        <img src="/mole_hole.png" alt="empty mole hole" className={styles.emptyHole}/>
    }
  </button>
);
