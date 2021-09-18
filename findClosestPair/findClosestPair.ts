export function findClosestPair(numbers: number[], sum: number): number {

  const map = new Map();

  let minDiff = -1;

  for ( let i = 0; i < numbers.length; i++ ) {
    
    let diff = sum - numbers[i];

    if ( map.has( diff ) ) {
      minDiff = numbers.length - 1;
      minDiff = Math.min( minDiff, i - map.get(diff))
    }
    map.set( numbers[i], i );
  }
  return minDiff;
};

// console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));