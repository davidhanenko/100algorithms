export function firstDuplicate(a: number[]): number {
  const obj = {};

  for ( let el of a ) {
    if ( obj[el] ) {
      return el
    }
    obj[el] = el;
  }
  return -1

  // for (let el of a) {
  //   obj[el] ? obj[el]++ : (obj[el] = 1);
  // }

  // const arr = Object.keys(obj)
  //   .filter(el => obj[el] > 1)
  //   .map(el => a.lastIndexOf(+el));

  // return arr.length ? a[Math.min(...arr)] : -1;
}

// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
// console.log(firstDuplicate([2, 4, 3, 5, 1]));
