export function avoidObstacles(inputArray: number[]): number {
  inputArray.sort((a, b) => a - b);

  for (let i = 0; i < inputArray.length; i++) {
    let temp = inputArray[i];

    if (inputArray.every(el => el !== temp + 1)) {
      return temp + 1;
    }
  }
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));
