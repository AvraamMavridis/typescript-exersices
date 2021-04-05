export default function flatMap(arr: any[]): any[] {
  return arr.reduce((prev, next) => {
    if (Array.isArray(next)) {
      return prev.concat(flatMap(next));
    } else {
      prev.push(next);
      return prev;
    }
  }, []);
}
