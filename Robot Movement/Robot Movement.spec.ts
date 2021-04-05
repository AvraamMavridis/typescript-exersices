import findPath from './Robot Movement';

describe('Robot Movement', () => {
  it('finds the path', () => {
    const grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 2],
    ];

    expect(findPath(grid)).toEqual(
      expect.arrayContaining([
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 2],
        [2, 3],
        [3, 3],
        [4, 3],
        [4, 4],
      ]),
    );

    const grid2 = [
      [0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 2],
    ];

    expect(findPath(grid2)).toEqual(
      expect.arrayContaining([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
        [2, 2],
        [2, 3],
        [3, 3],
        [3, 4],
        [3, 5],
        [4, 5],
      ]),
    );
  });
});
