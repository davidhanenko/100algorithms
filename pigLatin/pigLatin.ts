export function pigLatin(str: string): string {
  const regex = /[aeiou]/;
  let temp = '';
  let i = 0;

  if (regex.test(str[0])) {
    return `${str}way`;
  } else {
    while (!regex.test(str[i])) {
      temp += str[i];
      i++;
    }
    return str.slice(i) + temp + 'ay';
  }
}

// console.log(pigLatin('glove'));
// console.log(pigLatin('eight'));
// console.log(pigLatin('koight'));
