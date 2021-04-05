import groupThePeople from './groupThePeople';

describe('groupSize', () => {
  it('groups the ', () => {
    expect(groupThePeople([2, 1, 3, 3, 3, 2])).toEqual(expect.arrayContaining([[1], [0, 5], [2, 3, 4]]));
  })
})
