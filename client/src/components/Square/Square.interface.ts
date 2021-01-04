export interface ISquare {
  id: number;
  hasMole: boolean;
}

export interface ISquareProps {
  mole: ISquare;
  onClickHandler: any;
}
