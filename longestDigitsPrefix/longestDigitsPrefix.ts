export function longestDigitsPrefix(
  inputString: string
): string {  
  let regex = /[a-zA-z]/g;

  let i = inputString.search( regex );
  console.log(i);
  
  
  return inputString.slice( 0, i );
}

console.log(longestDigitsPrefix('123aa1'));
