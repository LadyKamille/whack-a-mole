import { useState } from 'react';
import styles from './Square.module.css';

export const Square = ({ hasMole }: { hasMole: boolean }) => {
  const [mole, setMole] = useState(hasMole);

  return <button className={ styles.square }>
    {
      mole ?
        <img src="/mole.png" alt="mole" onClick={ () => setMole(!mole) }/> :
        <img src="/mole_hole.png" alt="empty mole hole" className={styles.emptyHole}/>
    }
  </button>;
};
