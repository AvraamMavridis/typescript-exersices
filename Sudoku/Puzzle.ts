export default class Puzzle {
  private board: number[][];

  constructor(board: number[][]) {
    this.board = board;
  }

  isNotFilled() {
    return this.board.some(row => {
      return row.some(cell => cell === 0);
    });
  }

  getRows() {
    return this.board;
  }

  getColumns() {
    const columns = [];
    for (let i = 0; i < this.board.length; i++) {
      let column = [];
      for (let j = 0; j < this.board.length; j++) {
        column.push(this.board[j][i]);
      }
      columns.push(column);
    }
    return columns;
  }

  getSquares() {
    const len = this.getRows()[0].length - 1;
    const squaresPerLine = this.getRows()[0].length / 3;

    let squares: { [k: string]: number[] } = {};

    for (let i = 0; i < len; i += 3) {
      for (let k = 0; k < len; k += 3) {
        squares[`${i}-${k}`] = [];
        for (let j = i; j < i + 3; j++) {
          for (let m = k; m < k + 3; m++) {
            squares[`${i}-${k}`].push(this.board[j][m]);
          }
        }
      }
    }
    return squares;
  }

  getNearValues(row: number, column: number) {
    const valuesInRow = this.getRows()[row].filter(Boolean);
    const valuesInColumn = this.getColumns()[column].filter(Boolean);
    const squareItBelongsStartRow = Math.floor(row / 3) * 3;
    const squareItBelongsStartColumn = Math.floor(column / 3) * 3;
    const valuesInSquare = this.getSquares()[`${squareItBelongsStartRow}-${squareItBelongsStartColumn}`];
    return valuesInRow.concat(valuesInColumn).concat(valuesInSquare).filter(Boolean);
  }

  fill() {
    while (this.hasEmptySpots()) {
      this.board.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell === 0) {
            const nearValues = this.getNearValues(i, j);
            const uniqueNearValues = [...new Set(nearValues)];
            if (uniqueNearValues.length === 8) {
              const sum = uniqueNearValues.reduce((prev, next) => prev + next, 0);
              this.board[i][j] = 45 - sum;
            }
          }
        });
      });
    }

    return this.board;
  }

  hasEmptySpots() {
    return this.board.some(row => {
      return row.some(cell => cell === 0);
    });
  }
}
