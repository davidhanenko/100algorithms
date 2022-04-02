export function reflectString(inputString: string): string {
  const alphabet = [...Array(26).keys()].map(i =>
    String.fromCharCode(i + 97)
  );
  
  const strArr = inputString.split('');

  for (let i = 0; i < inputString.length; i++) {
    let index = alphabet.indexOf(strArr[i]);
    strArr[i] = alphabet[25 - index];
  }
  return strArr.join('');
}

console.log(reflectString('name'));
