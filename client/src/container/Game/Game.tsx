import { useEffect, useRef, useState } from 'react';
import { Board } from '../../components/Board/Board';
import { Timer } from '../../components/Timer/Timer';
import { ISquare } from '../../components/Square/Square.interface';
import styles from './Game.module.css';

const GAME_LENGTH_SECONDS = 30;

export const Game = () => {
  const grid = Array.from(
    Array(9),
    (_, index) => ({ id: index + 1, hasMole: false })
  );
  let moleInterval = useRef<number>();
  let timeInterval = useRef<number>();
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(GAME_LENGTH_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [squares, setSquares] = useState(grid);
  const [molesShowing, setMolesShowing] = useState(0);

  const clearIntervals = () => {
    window.clearInterval(moleInterval.current);
    window.clearInterval(timeInterval.current);
  };

  const reset = () => {
    setSeconds(GAME_LENGTH_SECONDS);
    setIsActive(false);
    setMolesShowing(0);
    setSquares(
      squares.map((square: ISquare) => (
        { ...square, ...{ hasMole: false } }
      ))
    );
  };

  const setHasMole = (item: ISquare): void => {
    setSquares(
      squares.map((square: ISquare) => (
        item.id === square.id ? item : square
      ))
    );
  };

  const onSquareClick = (square: ISquare): void => {
    setMolesShowing(molesShowing -1);
    setHasMole({...square, ...{hasMole: false}});
    setScore(score + 1);
  };

  const setTimer = () => {
    if (seconds > 0) {
      setSeconds(seconds => seconds - 1);
    }

    if (seconds === 0) {
      setIsActive(false);
      clearIntervals();
    }
  };

  const toggleRandomMole = (): void => {
    const randomIndex = Math.floor(Math.random() * 9);
    const mole = squares[randomIndex];
    if (!squares[randomIndex].hasMole && molesShowing < 3) {
      setMolesShowing(molesShowing + 1);
      setHasMole({ ...mole, ...{ hasMole: true } });
    } else {
      setMolesShowing(molesShowing - 1);
      setHasMole({ ...mole, ...{ hasMole: false } });
    }
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      moleInterval.current = window.setInterval(toggleRandomMole, 750);
      timeInterval.current = window.setInterval(setTimer, 1000);
    } else if (!isActive && seconds !== 0) {
      clearIntervals();
    }
    return () => clearIntervals();
  }, [isActive, seconds]);

  return (
    <div className={ styles.game }>
      <h1>Whack-A-Mole</h1>
      <h2>Player Score: {score}</h2>
      <Board squares={ squares } onSquareClick={ onSquareClick }/>
      <Timer isActive={ isActive } seconds={ seconds } toggle={ toggle } reset={ reset }/>
    </div>
  );
};
