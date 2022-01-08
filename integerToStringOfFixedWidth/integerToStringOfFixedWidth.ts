export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {

  let strNum = number.toString();

  if ( strNum.length === width ) {
    return strNum;
  } else {
    return strNum.length < width ? strNum.padStart( width, '0' ) : strNum.slice( width ).padStart( width, '' );
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
