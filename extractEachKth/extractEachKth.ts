export function extractEachKth(inputArray: number[], k: number): number[] {
  // for ( let i = k-1; i < inputArray.length; i += k-1 ) {
  //   inputArray.splice(i,1)
  // }
  // return inputArray;
  return inputArray.filter((el, i) => (i + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
