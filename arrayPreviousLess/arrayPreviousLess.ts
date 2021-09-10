export function arrayPreviousLess(items: number[]): number[] {
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    !items[i-1] || items[i] < items[i - 1] ? arr.push(-1) : arr.push(items[i - 1]);
  }
  return arr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
