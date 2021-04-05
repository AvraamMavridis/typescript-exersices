type LastGroupOf = {
  [key: number]: number[];
};

export default function groupThePeople(groupSizes: number[]): number[][] {
  const lastGroupOf: LastGroupOf = {};
  const result: number[][] = [];

  groupSizes.forEach((el, index) => {
    if (!lastGroupOf[el] || lastGroupOf[el].length === 0) {
      lastGroupOf[el] = [];
    }

    lastGroupOf[el].push(index);

    if (lastGroupOf[el].length === el) {
      result.push(lastGroupOf[el]);
      lastGroupOf[el] = [];
    }
  });

  return result;
}
