export function composeRanges(nums: number[]): string[] {
  const res = [];
  let start = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i-1] !== 1) {
      res.push(`${start}->${nums[i-1]}`);
      start = nums[i];
    } 
    if(start === nums[i] && !nums[i+1]) {
      res.push(`${nums[i]}`)
    }
  }
  console.log(res)
  return res
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
