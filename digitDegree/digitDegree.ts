export function digitDegree(n: number): number {
  let count = 0;

  if (String(n).split('').length === 1) return 0;
  
  count++;

  n = String(n)
    .split('')
    .map(el => Number(el))
    .reduce((a, b) => a + b);

  if (String(n).split('').length !== 1) {
    digitDegree(n);
  }

  return count;
}

// console.log(digitDegree(5));
// console.log(digitDegree(10));
// console.log(digitDegree(91));
