export default function findCenter(edges: [number, number][]) {
  const count = new Map();
  let startEdge;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let countEdge = count.get(edges[i][j]);
      if (countEdge) {
        count.set(edges[i][j], ++countEdge);
      } else {
        count.set(edges[i][j], 1);
      }

      if (countEdge > 1) {
        startEdge = edges[i][j];
      }
    }
  }

  return startEdge;
}
