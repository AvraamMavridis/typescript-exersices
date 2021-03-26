import setZeros from './matrixZeros';

describe('matrixZeros', () => {
  let problem = [
    [1, 2, 3, 4, 0, 5],
    [11, 8, 5, 4, 2, 3],
    [11, 0, 5, 4, 2, 3],
    [19, 18, 25, 41, 2, 3],
    [5, 8, 35, 4, 32, 3],
  ];

  let expected = [
    [0, 0, 0, 0, 0, 0],
    [11, 0, 5, 4, 0, 3],
    [0, 0, 0, 0, 0, 0],
    [19, 0, 25, 41, 0, 3],
    [5, 0, 35, 4, 0, 3],
  ];

  it('sets zeros on the right rows and columns', () => {
    expect(setZeros(problem)).toEqual(expected);
  })
});
