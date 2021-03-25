import ForwardIterator from './ForwardIterator';

describe('ForwardIterator', () => {
  it('should be able to iterate over Arrays', () => {
    const forwardIterator = new ForwardIterator<number>([1, 2, 3], [4, 5, 6]);
    let len = 1;

    for (let f of forwardIterator) {
      expect(f).toEqual(len);
      len++;
    }
  });

  it('should be able to iterate over Sets', () => {
    const forwardIterator = new ForwardIterator<number>(new Set([1, 2, 3]), new Set([4, 5, 6]));
    let len = 1;

    for (let f of forwardIterator) {
      expect(f).toEqual(len);
      len++;
    }
  });
});
