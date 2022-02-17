export function missingLetters(str: string): string {
    const alphabet = [...Array(26).keys()].map(i =>
      String.fromCharCode(i + 97)
    );
  
  for ( let i = 0; i < str.length; i++ ) {
    if(str[i] !== alphabet[i]) return alphabet[i]
  }
  return undefined;
}

// console.log(missingLetters("bce"));
// console.log(missingLetters("abce"));
// console.log(missingLetters("abcdefghjklmno"));
// console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));