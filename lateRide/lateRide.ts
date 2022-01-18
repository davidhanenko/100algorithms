export function lateRide(n: number): number {
  let h = Math.floor(n / 60);
  let m = n % 60;

  h = h
    .toString()
    .split('')
    .reduce((a, b) => +a + +b);
  m = m
    .toString()
    .split('')
    .reduce((a, b) => +a + +b);

  return +h + +m;
}

console.log(lateRide(240));
console.log(lateRide(808));
