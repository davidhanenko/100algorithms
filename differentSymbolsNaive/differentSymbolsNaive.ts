export function differentSymbolsNaive(s: string): number {
  let obj = {};

  for (let char of s.split('')) {
    obj.hasOwnProperty(char) ? (obj[char] += 1) : (obj[char] = 1);
  }
  return Object.keys(obj).length;
}

console.log(differentSymbolsNaive('cabca'));
