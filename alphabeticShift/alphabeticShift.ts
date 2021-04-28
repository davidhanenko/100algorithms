export function alphabeticShift(inputString: string): string {
  let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
  return inputString
    .split('')
    .forEach((el, i) => {
      let index = inputString.indexOf(el);
      el = inputString(index + 1);
    })
    .join('');
}

console.log(alphabeticShift('crazy'));
