export function crossingSum(matrix: number[][], a: number, b: number): number {
  let row = matrix[a].reduce((a, b) => a + b, 0);
  let col = matrix.map(el => (el = el[b])).reduce((a, b) => a + b);
  return row + col - matrix[a][b];
}

// console.log(
//   crossingSum(
//     [
//       [1, 1, 1, 1],
//       [2, 2, 2, 2],
//       [3, 3, 3, 3],
//     ],
//     1,
//     3
//   )
// );
