export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((el, i, arr) => {
    el === elemToReplace ? (arr[i] = substitutionElem) : el;
  });
  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
