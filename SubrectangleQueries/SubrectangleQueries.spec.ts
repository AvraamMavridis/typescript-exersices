import SubrectangleQueries from './SubrectangleQueries';

describe('SubrectangleQueries', () => {
  it('updates the queries correctly', () => {
    const subrectangleQueries = new SubrectangleQueries([
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]);

    expect(subrectangleQueries.getValue(0, 0)).toEqual(1);

    subrectangleQueries.updateSubrectangle(0, 0, 2, 2, 100);
    expect(subrectangleQueries.getValue(0, 0)).toEqual(100);
    expect(subrectangleQueries.getValue(2, 2)).toEqual(100);

    subrectangleQueries.updateSubrectangle(1, 1, 2, 2, 20);
    expect(subrectangleQueries.getValue(2, 2)).toEqual(20);
  });
});
