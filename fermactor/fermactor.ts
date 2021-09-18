import { isReturnStatement } from "typescript";

export function fermactor(n: number): number[] {

 let x = Math.ceil( Math.sqrt( n ) );
  let arr = [];
  
  for ( let i = 1; i < x; i++ ) {
    if ( x ** 2 - i ** 2 === n ) {
      arr.push( x, i );
    }  
  }
  if ( arr.length > 0) {
    return arr
  } else x++;
}

// console.log(fermactor(15));