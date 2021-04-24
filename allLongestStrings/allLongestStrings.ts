export function allLongestStrings(inputArray: string[]): string[] {
  let max = Math.max(...inputArray.map(el => el.length));
return inputArray.filter(el => el.length === max )
}

// console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
