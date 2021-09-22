export function houseNumbersSum(inputArray: number[]): number {
  let index = inputArray.findIndex(el => el === 0);
  let arr = inputArray.slice(0, index);

  return arr.reduce((a, b) => a + b);
}

// console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
