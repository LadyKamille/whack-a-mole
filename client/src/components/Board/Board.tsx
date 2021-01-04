import { useState } from 'react';
import { Square } from '../Square/Square';

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill({hasMole: true}));

  return (
    <>
      {
        squares.map((square) => (
          <Square hasMole={ square.hasMole }/>
        ))
      }
    </>
  )
}
