export function arrayChange( inputArray: number[] ): number {

  let moves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    while (inputArray[i] - inputArray[i - 1] !== 1) {
      inputArray[i]++;
      moves++
    }
  }
  return moves;

  //  let value_increased = 0;
  //  for (let i = 0; i < inputArray.length - 1; i++) {
  //    if (inputArray[i] >= inputArray[i + 1]) {
  //      let temp = inputArray[i] - inputArray[i + 1] + 1;
  //      value_increased += temp;
  //      inputArray[i + 1] += temp;
  //    }
  //  }
  //  return value_increased;
}

// console.log(arrayChange([5, 3, 1]));
// console.log(arrayChange([1, 1, 1]));
