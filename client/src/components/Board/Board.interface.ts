import { ISquare } from '../Square/Square.interface';

export interface IBoardProps {
  squares: ISquare[];
  onSquareClick: any;
}
