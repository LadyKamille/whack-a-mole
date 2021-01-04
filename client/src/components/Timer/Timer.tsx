import { useEffect, useState } from 'react';

const GAME__LENGTH_SECONDS = 30;

export const Timer = () => {
  const [seconds, setSeconds] = useState(GAME__LENGTH_SECONDS);
  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setSeconds(GAME__LENGTH_SECONDS);
    setIsActive(false);
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
        }

        if (seconds === 0) {
          setIsActive(false);
          clearInterval(interval);
        }
      }, 1000);
    }
    // @ts-ignore
    else if (!isActive && seconds !== 0 && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div className="time">
        {seconds}s
      </div>
      <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  )
};
