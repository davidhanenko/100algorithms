export function containsCloseNums(nums: number[], k: number): boolean {


for(let j =0; j<nums.length; j++) {

  for (let i = 1; i < nums.length; i++) {

console.log(i,j);

    if(nums[j] == nums[i] && Math.abs(i-j) == k) {
      return true
    }
  }
}
return false
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));