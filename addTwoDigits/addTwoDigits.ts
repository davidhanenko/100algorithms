export function addTwoDigits(n: any): number {
  // return String(n).split('').reduce((acc, el) => acc + +el, 0)
  let sum = 0;
  while (n >= 10) {
    let x = n % 10;
    sum += x;
    n = (n - x) / 10;
  }
  sum += n;
  return sum;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(33333));
console.log(addTwoDigits(291));
console.log(addTwoDigits(11));
