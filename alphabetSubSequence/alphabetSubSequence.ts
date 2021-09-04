export function alphabetSubsequence( s: string ): boolean {
  
  const alphabet = [...Array( 26 ).keys()].map( i => String.fromCharCode( i + 97 ) );
  
  for ( let i = 1; i < s.length; i++ ) {
    if ( alphabet.indexOf( s[i] ) <= alphabet.indexOf( s[i - 1] ) ) {
      return false
    }
  }
  return true;
}

// console.log(alphabetSubsequence('zab'));
// console.log(alphabetSubsequence('effg'));
// console.log(alphabetSubsequence('cdce'));
// console.log(alphabetSubsequence('ace'));
// console.log(alphabetSubsequence('bxz'));
