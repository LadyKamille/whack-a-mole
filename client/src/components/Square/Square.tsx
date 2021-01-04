import styles from './Square.module.css';
import { ISquareProps } from './Square.interface';

export const Square = ({ mole, onClickHandler}: ISquareProps) => {
  const onMoleClick = () => {
    onClickHandler({...mole, ...{hasMole: !mole.hasMole}});
  };

  return <button className={ styles.square }>
    {
      mole.hasMole ?
        <img src="/mole.png" alt="mole" onClick={onMoleClick}/> :
        <img src="/mole_hole.png" alt="empty mole hole" className={styles.emptyHole}/>
    }
  </button>;
};
