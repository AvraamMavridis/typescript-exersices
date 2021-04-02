import { encode, decode } from './tinyUrl';
describe('Tiny Url', () => {
  it('encodes and decodes the url correctly', () => {
    const url = 'https://example.com/problems/design-tinyurl';
    const url2 = 'https://example2.com/problems/design-tinyurl';
    expect(decode(encode(url))).toEqual(url);
    expect(decode(encode(url2))).toEqual(url2);
  })
})
