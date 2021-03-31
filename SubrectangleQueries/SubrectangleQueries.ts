export default class SubrectangleQueries {
  private _rectangle: number[][];

  constructor(rectangle: number[][]) {
    this._rectangle = rectangle;
  }

  updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
    for (let r = row1; r <= row2; r++) {
      for (let c = col1; c <= col2; c++) {
        this._rectangle[r][c] = newValue;
      }
    }
  }

  getValue(row: number, col: number): number {
    return this._rectangle[row][col];
  }
}
