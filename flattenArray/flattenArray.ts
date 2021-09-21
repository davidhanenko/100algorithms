export function flattenArray(arr: any[]): any[] {
  // return arr.flat(5);

let newArr = [];
  
  arr.forEach( el => {
    if ( Array.isArray( el ) ) {
      newArr = newArr.concat( flattenArray( el ) );
    } else {
      newArr.push( el );
    }
  })
  return newArr;
};

// console.log(flattenArray([[["a"]], [["b"]]]));
// console.log(flattenArray([1, [2], [3, [[4]]]]));
