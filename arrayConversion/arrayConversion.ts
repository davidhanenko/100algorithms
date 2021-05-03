export function arrayConversion(inputArray: number[]): number {
  let l = inputArray.length;
  var newArr = [];
  let i = 1;

  if (i % 2 !== 0) {
  
  }

  if (i % 2 === 0) {
    for (let j = 1; j < l; j+=2) {
      newArr.push(newArr[j] * newArr[j - 1]);
    }
    inputArray = newArr.slice(l / 2);
    l = inputArray.length;
    i++;
  }
  console.log(inputArray);
}


// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
