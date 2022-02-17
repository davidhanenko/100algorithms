export function minesweeper(
  matrix: boolean[][]
): number[][] {

  let arr = Array.from( matrix, el => el = 1 );

  // for (let i = 0; i < matrix.length-1; i++) {
  //   for (let j = 0; j < matrix[0].length-1; j++) {
  //     if (matrix[i][j] == true) {
  //       matrix[i + 1][j] += 1;
  //       matrix[i][j + 1] += 1;
  //     } else {
  //       matrix[i][j] = 1;
  //     }
  //   }
  // }

  
}

// console.log(
//   minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
//   ])
// );
