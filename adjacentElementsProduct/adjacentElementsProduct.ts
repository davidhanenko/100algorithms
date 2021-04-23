export function adjacentElementsProduct(inputArray: number[]): number {
  let maxProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    let product = inputArray[i] * inputArray[i - 1];

    maxProduct = maxProduct < product ? product : maxProduct;
  }

  return maxProduct;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
