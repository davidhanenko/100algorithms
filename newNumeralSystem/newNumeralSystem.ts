export function newNumeralSystem( number: string ): string[] {
  
  let resArr = [];
  let j = 0;
console.log(number.charCodeAt(0) - 65);

  for (
    let i = number.charCodeAt(0) - 65;
    i >= (number.charCodeAt(0) - 65) / 2;
    i--
  ) {
  
    
    resArr.push(
      `${String.fromCharCode(
        j + 97
      ).toUpperCase()} + ${String.fromCharCode(
        i + 97
      ).toUpperCase()}`
    );

    j++;
  }

  return resArr;
}

console.log(newNumeralSystem('G'));
