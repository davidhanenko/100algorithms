export function composeRanges(nums: number[]): string[] {
  const res = [];
  let start = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== 1 && start === nums[i - 1]) {
      res.push(`${nums[i - 1]}`);
      start = nums[i];
    } else if (nums[i] - nums[i - 1] !== 1) {
      res.push(`${start}->${nums[i - 1]}`);
      start = nums[i];
    }

    if (nums[i] - nums[i - 1] !== 1 && !nums[i + 1]) {
      res.push(`${nums[i]}`);
    }
  }

  return res;
}

console.log(composeRanges([-1, 0, 1, 2, 4, 6, 7, 9]));
