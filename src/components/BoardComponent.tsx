import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}
const BoardComponent: React.FC<BoardComponentProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, i) => (
        <>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </>
      ))}
    </div>
  );
};

export default BoardComponent;
