export function arrayPreviousLess(items: number[]): number[] {
  // let newArr = []
  // for (let i = 0; i< items.length; i++ ) {

  //  !items[i-1] || items[i-1] > items[i] ? newArr.push(-1) : newArr.push(items[i-1])
  // }
  // return newArr

  return items.map((el, i, arr) => {
    return !arr[i - 1] || arr[i - 1] > el ? -1 : arr[i - 1];
  });

}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
