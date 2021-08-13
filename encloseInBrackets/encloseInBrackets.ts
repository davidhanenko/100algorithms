export function encloseInBrackets( inputString: string ): string {
  return inputString
    .padStart( inputString.length + 1, '(' )
    .padEnd( inputString.length + 2, ')' );
}
console.log(encloseInBrackets('abacaba'));