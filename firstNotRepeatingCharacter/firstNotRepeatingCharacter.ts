export function firstNotRepeatingCharacter(s: string): string {

  const map = new Map();

  for ( let k of s ) {
    map.has(k) ? map.set(k, map.get(k) + 1) : map.set(k, 1);
  }
   
  for ( let el of map.entries() ) {
    if ( el[1] === 1 ) {
     return el[0]
    }
 }
  // return Object.keys( obj ).find( el => obj[el] === 1 ) || '_';
  return '_'
}

// console.log(firstNotRepeatingCharacter('abacabad'));
// console.log(firstNotRepeatingCharacter('abacabaabacaba'));
