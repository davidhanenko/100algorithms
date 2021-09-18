export function findClosestPair(numbers: number[], sum: number): number {

  const map = new Map();

  let minDiff = numbers.length - 1;
  let isPair = 0;

  for ( let i = 0; i < numbers.length; i++ ) {
    
    let diff = sum - numbers[i];

    if ( map.has( diff ) ) {
      minDiff = Math.min( minDiff, i - map.get( diff ) );
      isPair++
    }
    map.set( numbers[i], i );
  }
  return isPair > 0 ? minDiff : -1;
}

// console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));