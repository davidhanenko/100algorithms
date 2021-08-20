export function absoluteValuesSumMinimization( a: number[] ): number {
  // empty object to fill with sums;
    let obj = {};
    
  // sort array to get the smallest x if there are several equall smallest sums;
    a = a.sort( ( a, b ) => a - b );
    
  // fill object with calculated sums
  for (let i = 0; i < a.length; i++) {
    obj[i] = a.reduce((acc, cur) => acc + Math.abs(cur - a[i]), 0);
  }

  // min possible sum
  let minSum = Math.min(...Object.values(obj));

  // get KEY/INDEX that gave us smallest sum

    let xIndex = Object.keys( obj ).find( key => obj[key] === minSum );
    
    // return integer smallest 'x' from 'a' that gave us smallest sum
  return a[xIndex];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
