import { ITimerProps } from './Timer.interface';

export const Timer = ({isActive, seconds, reset, toggle}: ITimerProps) => (
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
);
