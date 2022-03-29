export function properNounCorrection(noun: string): string {
  return noun
    .slice(0, 1)
    .toUpperCase()
    .concat(noun.slice(1).toLowerCase());
}

// console.log(properNounCorrection('pARiS'));
// console.log(properNounCorrection('John'));
