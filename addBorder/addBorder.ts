export function addBorder(picture: string[]): any {
  const borderBase = '*'.repeat(picture[0].length);

  picture.unshift(borderBase);
  picture.push(borderBase);

  return picture.map(el => `*${el}*`);
}

// console.log(addBorder(['abc', 'ded']));
