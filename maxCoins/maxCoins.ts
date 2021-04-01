export default function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  const len = piles.length / 3;

  return piles.reduce((prev, next, index) => {
    if(index < len) return prev + 0;

    if ((index - len) % 2 === 0) {
      return prev + next;
    } else {
      return prev;
    }
  }, 0);
}
