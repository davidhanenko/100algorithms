export function addTwoDigits(n: any): number {
  return n
    .toString()
    .split('')
    .reduce((a:string, b:string) => +a + +b);
}

console.log(addTwoDigits(29));
// console.log(addTwoDigits(33333));
// console.log(addTwoDigits(291));
// console.log(addTwoDigits(11));