function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  const len = piles.length / 3;

  return piles.reduce((prev, next, index) => {
    if (index < len || (index - len) % 2 !== 0) return prev;
    return prev + next;
  }, 0);
}
