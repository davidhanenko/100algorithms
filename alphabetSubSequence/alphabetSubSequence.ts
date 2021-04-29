export function alphabetSubsequence(s: string): boolean {
  // let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

  // for (let i = 0; i < s.length-1; i++) {
  //   if (alphabet.indexOf(s[i]) >= alphabet.indexOf(s[i + 1])) {
  //     return false;
  //   }
  // }

  let arr = s.split('')
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].charCodeAt(0) >= arr[i+1].charCodeAt(0)) {
      return false;
    }
  }
  return true;
}

// console.log(alphabetSubsequence('zab'));
// console.log(alphabetSubsequence('effg'));
// console.log(alphabetSubsequence('cdce'));
// console.log(alphabetSubsequence('ace'));
// console.log(alphabetSubsequence('bxz'));
