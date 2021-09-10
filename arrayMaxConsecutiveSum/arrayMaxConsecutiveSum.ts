export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let maxSum = 0;
  let j = 0;
  let curSum = inputArray.slice(0, k).reduce((a, b) => a + b);

  for (let i = k; i < inputArray.length; i++) {
    curSum = curSum - inputArray[j] + inputArray[i];
    j++;
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
