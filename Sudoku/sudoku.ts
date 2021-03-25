import Puzzle from './Puzzle';

export default function solveSudoku(puzzle: number[][]) {
  const newPuzzle = new Puzzle(puzzle);
  return newPuzzle.fill();
}


