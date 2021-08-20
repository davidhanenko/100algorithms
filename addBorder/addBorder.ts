export function addBorder(picture: string[]): string[] {
  const borderBase = '*'.repeat(picture[0].length +2);

  return [ borderBase, ...picture.map(el => (el = `*${el}*`)), borderBase];
}

console.log(addBorder(['abc', 'ded']));
