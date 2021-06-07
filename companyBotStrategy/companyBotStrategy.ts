export function companyBotStrategy(trainingData: number[][]): number {
  let arr = trainingData.filter(el => el[1] === 1);

  if (arr.length <= 0) return 0;

  return arr.reduce((a, b) => a + b[0], 0) / arr.length;
}

// console.log(
//   companyBotStrategy([
//     [3, 1],
//     [6, 1],
//     [4, 1],
//     [5, 1],
//   ])
// );
// console.log(
//   companyBotStrategy([
//     [4, 1],
//     [4, -1],
//     [0, 0],
//     [6, 1],
//   ])
// );
// console.log(
//   companyBotStrategy([
//     [4, -1],
//     [0, 0],
//     [5, -1],
//   ])
// );
