import hasUniqueCharacters from './hasUniqueCharacters';

describe('hasUniqueCharacters', () => {
  it('should return true if all characters unique', () => {
    expect(hasUniqueCharacters("abcd")).toBeTruthy();
  });

  it('should return false if there is any duplicate character', () => {
    expect(hasUniqueCharacters('abcda')).toBeFalsy();
  });
})
