export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = 0;
  for (let i = 1; i < inputArray.length; i++) {
    maxDiff < (inputArray[i - 1] - inputArray[i]) ? maxDiff = (inputArray[i - 1] - inputArray[i]) : maxDiff
  }
  return maxDiff
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
