export default function setZeros(matrix: number[][]): number[][] {
  const rowsWithZero = new Set();
  const columnsWithZero = new Set();

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        rowsWithZero.add(i);
        columnsWithZero.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowsWithZero.has(i) || columnsWithZero.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}
