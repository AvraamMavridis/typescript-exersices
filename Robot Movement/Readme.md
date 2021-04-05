We have an m x n grid. A robot is placed at the top-left corner of this grid. The robot can only move either right or down at any point in time, but it is not allowed to move in certain cells. The robot's goal is to find a path from the top-left corner to the bottom-right corner of the grid.

Destination is marked as 2. 
Walls are marked as 1. 
Cells where the robot can move are marked as 0.

Example:

```ts
const grid = [
  [0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 2],
];

findPath(grid)

/**
 * [
  [ 0, 0 ], [ 0, 1 ],
  [ 0, 2 ], [ 1, 2 ],
  [ 2, 2 ], [ 2, 3 ],
  [ 3, 3 ], [ 3, 4 ],
  [ 3, 5 ], [ 4, 5 ]
] */
```
