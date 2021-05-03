export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = [];
  for (let i = 1; i < inputArray.length; i++) {
    maxDiff.push(inputArray[i - 1] - inputArray[i]);
  }
  return Math.max(...maxDiff);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
