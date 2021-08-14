export function evenDigitsOnly(n: number): boolean {
  return String(n).split('').every(el=> el%2===0)
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));