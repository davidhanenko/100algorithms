export function arrayConversion(inputArray: number[]): number {
  let iteration = 1;
  let iterations = inputArray.length / 2;

  for (let i = 0; i < iterations - 1; i++) {
    if (iteration % 2 !== 0) {
      inputArray = sum(inputArray, iteration);
      iteration++;
    } else {
      inputArray = prod(inputArray, iteration);
      iteration++;
    }
  }
  return inputArray[0];
}

const sum = (arr, iteration) => {
  let tempArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    tempArr.push(arr[i] + arr[i - 1]);
  }
  return tempArr;
};

const prod = (arr, iteration) => {
  let tempArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    tempArr.push(arr[i] * arr[i - 1]);
  }
  return tempArr;
};
// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
