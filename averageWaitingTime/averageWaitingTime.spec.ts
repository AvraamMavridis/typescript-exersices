import averageWaitingTime from './averageWaitingTime';

describe('Chef Average Waiting Time', () => {
  it('finds the average waiting time', () => {
    expect(
      averageWaitingTime([
        [1, 2],
        [2, 5],
        [4, 3],
      ]),
    ).toEqual(5);

    expect(
      averageWaitingTime([
        [5, 2],
        [5, 4],
        [10, 3],
        [20, 1],
      ]),
    ).toEqual(3.25);
  })
})
