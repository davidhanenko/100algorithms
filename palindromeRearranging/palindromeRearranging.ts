export function palindromeRearranging(inputString: string): boolean {

  let obj = {};

  for ( let i = 0; i < inputString.length; i++ ) {
    obj[inputString[i]]
      ? obj[inputString[i]]++
      : obj[inputString[i]] = 1;
  }


  for ( let el in obj) {
    if ( obj[el] % 2 !== 0 ) return false;
  }
  return true;
}

// console.log(palindromeRearranging('aabb'));
// console.log(palindromeRearranging('aabcb'));
// console.log(palindromeRearranging('aabbba'));