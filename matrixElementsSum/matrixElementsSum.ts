export function matrixElementsSum(matrix: any[][]): number {
  let res: number = 0;
  let test: boolean[] = Array.from(matrix[0], el => (el = false));

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((el, index) => {
      if (el !== 0 && test[index] === false) {
        res += el;
      } else {
        test[index] = true;
      }
    });
  }
  return res;
}

// console.log(
//   matrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// );
