import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //BLACK
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); //WHITE
        }
      }
      this.cells.push(row);
    }
  }

  public getCells(x: number, y: number) {
    return this.cells[x][y];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCells(1, i));
      new Pawn(Colors.BLACK, this.getCells(6, i));
    }
  }
  private addKings() {
    new King(Colors.WHITE, this.getCells(0, 4));
    new King(Colors.BLACK, this.getCells(7, 4));
  }
  private addQueens() {
    new Queen(Colors.WHITE, this.getCells(0, 3));
    new Queen(Colors.BLACK, this.getCells(7, 3));
  }
  private addBishops() {
    new Bishop(Colors.WHITE, this.getCells(0, 2));
    new Bishop(Colors.WHITE, this.getCells(0, 5));
    new Bishop(Colors.BLACK, this.getCells(7, 2));
    new Bishop(Colors.BLACK, this.getCells(7, 5));
  }
  private addRooks() {
    new Rook(Colors.WHITE, this.getCells(0, 0));
    new Rook(Colors.WHITE, this.getCells(0, 7));
    new Rook(Colors.BLACK, this.getCells(7, 0));
    new Rook(Colors.BLACK, this.getCells(7, 7));
  }
  private addKnights() {
    new Knight(Colors.WHITE, this.getCells(0, 6));
    new Knight(Colors.WHITE, this.getCells(0, 1));
    new Knight(Colors.BLACK, this.getCells(7, 6));
    new Knight(Colors.BLACK, this.getCells(7, 1));
  }
  public addFigures() {
    this.addKings();
    this.addPawns();
    this.addKnights();
    this.addQueens();
    this.addRooks();
    this.addBishops();
  }
}
