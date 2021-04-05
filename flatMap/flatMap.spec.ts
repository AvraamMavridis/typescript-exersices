import flatMap from './flatMap';

describe('flatMap', () => {
  it('should flatten the array', () => {
    expect(flatMap([1, [2, [3], 4], [5]])).toEqual([1,2,3,4,5]);
    expect(flatMap([[[3]]])).toEqual([3]);
    expect(flatMap([[[]]])).toEqual([]);
    expect(flatMap([[[]], []])).toEqual([]);
  });
})
