export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let currentSum = 0;
  let maxSum;
  for (let i = 0; i < k; i++) {
    currentSum += inputArray[i];
  }
  maxSum = currentSum;
  let j = 0;
  for (let i = k; i < inputArray.length; i++) {
    currentSum = currentSum - inputArray[j] + inputArray[i];
    j++;
    if (maxSum <= currentSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
