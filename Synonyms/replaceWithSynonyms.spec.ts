import replaceWithSynonyms from './replaceWithSynonyms';

describe('replaceWithSynonyms', () => {
  it('replaces correctly the words in the past text', () => {
    expect(replaceWithSynonyms('walk and waft and view')).toBe('move and fly and look');
  });

  it('keeps the words for which there is not synonym', () => {
    expect(replaceWithSynonyms('walk and waft and view and play')).toBe('move and fly and look and play');
  });
})
