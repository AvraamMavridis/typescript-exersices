import maxCoins from './maxCoins';

describe('maxCoins', () => {
  it('finds the max coins to pick', () => {
    expect(maxCoins([2, 4, 1, 2, 7, 8])).toBe(9);
    expect(maxCoins([2, 4, 8])).toBe(4);
    expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])).toBe(18);
  });
});
