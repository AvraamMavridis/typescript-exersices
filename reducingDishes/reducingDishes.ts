export default function maxSatisfaction(satisfaction: number[]): number {
  const s = satisfaction.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const subArray = s.slice(i);
    const sum = subArray.reduce((prev, cur, index) => prev + cur * (index + 1), 0);
    max = Math.max(max, sum);
  }

  return max;
}
