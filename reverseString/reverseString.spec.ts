import reverseString from './reverseString';

describe('reverseString()', () => {
  it('reverses a string', () => {
    expect(reverseString('12345')).toEqual('54321');
  });
})
