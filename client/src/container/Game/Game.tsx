import { Board } from '../../components/Board/Board';
import { Timer } from '../../components/Timer/Timer';
import styles from './Game.module.css';

export const Game = () => (
  <div className={styles.game}>
    <Board />
    <Timer />
  </div>
);
