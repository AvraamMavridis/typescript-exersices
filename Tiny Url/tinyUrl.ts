import { createHash } from 'crypto';

const m = new Map();

export function encode(longUrl: string): string {
  const v = createHash('md5').update(longUrl).digest('hex');
  m.set(v, longUrl);
  return v;
}

export function decode(shortUrl: string): string {
  return m.get(shortUrl);
}
