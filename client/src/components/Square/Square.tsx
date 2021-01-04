import React from 'react';

export const Square = ({hasMole} : {hasMole: boolean}) => (
  <button className="mole">
    {
      hasMole ?
        <img src="/mole.png" alt="mole"/> :
        <img src="/mole_hole.png" alt="empty mole hole"/>
    }
  </button>
);
