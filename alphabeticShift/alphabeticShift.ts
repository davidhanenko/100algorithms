export function alphabeticShift(inputString: string): string {
  let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

  let newStr = inputString.split('');
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] === 'z'
      ? (newStr[i] = alphabet[0])
      : (newStr[i] = alphabet[alphabet.indexOf(newStr[i]) + 1]);
  }
  return newStr.join('');
}

// console.log(alphabeticShift('crazy'));
