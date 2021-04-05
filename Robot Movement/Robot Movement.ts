export default function findPath(grid: number[][]) {
  const path: [number, number][] = [];

  function move(i: number, j: number) {
    if (!grid[i] || grid[i][j] !== 0) {
      return;
    }

    if (grid[i][j] === 0) {
      path.push([i, j]);
    }

    if (grid[i + 1] && grid[i + 1][j] === 0) {
      move(i + 1, j);
    } else {
      move(i, j + 1);
    }
  }

  move(0, 0);

  path.push([grid.length - 1, grid[0].length - 1]);
  return path;
}
