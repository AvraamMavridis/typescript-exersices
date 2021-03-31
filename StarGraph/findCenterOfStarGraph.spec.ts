import findCenterOfStarGraph from './findCenterOfStarGraph';

describe('findCenterOfStarGraph', () => {
  it('finds the center of the graph', () => {
    expect(
      findCenterOfStarGraph([
        [1, 2],
        [2, 3],
        [4, 2],
      ]),
    ).toEqual(2);

    expect(
      findCenterOfStarGraph([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ]),
    ).toEqual(1);
  });
});
