export function mostFrequentDigitSum(n: number): number {
  let obj = {};

  const sum = x => {
    if (x > 9) {
      return String(x)
        .split('')
        .reduce((a, b) => +a + +b);
    }
    return x;
  };
  while (n !== 0) {
    obj[sum(n)] ? obj[sum(n)]++ : (obj[sum(n)] = 1);
    n = n - sum(n);
  }

  let arr = Object.entries( obj ).sort( ( a, b ) => b[1] - a[1] );

  return +arr[0][0];

}

// console.log(mostFrequentDigitSum(88));
// console.log(mostFrequentDigitSum(8));
