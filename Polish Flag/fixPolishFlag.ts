type Color = 'W' | 'R';

export default function fixPolishFlag(rows: Color[]): {
  flag: Color[], moves: number
} {
  let indexOfWhite = rows.indexOf('W');
  let lastIndexOfRed = rows.lastIndexOf('R');
  let moves = 0;

  while (indexOfWhite < lastIndexOfRed) {
    [rows[indexOfWhite], rows[lastIndexOfRed]] = [rows[lastIndexOfRed], rows[indexOfWhite]];
    indexOfWhite = rows.indexOf('W');
    lastIndexOfRed = rows.lastIndexOf('R');
    moves++;
  }

  return { flag: rows, moves };
}
