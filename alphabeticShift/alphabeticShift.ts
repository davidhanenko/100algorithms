export function alphabeticShift(inputString: string): string {
  let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

   let arrayFromString = inputString.split('');

   arrayFromString.forEach((el, i, arr) => {
     if (el !== alphabet[alphabet.length - 1]) {
       arr[i] = alphabet[alphabet.indexOf(el) + 1];
     } else {
       arr[i] = alphabet[0];
     }
   });
   return arrayFromString.join('');
}

// console.log(alphabeticShift('crazy'));
