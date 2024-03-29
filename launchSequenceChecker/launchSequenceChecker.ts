export function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  const obj = {};

  for (let i = 0; i < systemNames.length; i++) {
    if (obj.hasOwnProperty(systemNames[i])) {
      if (obj[systemNames[i]] > stepNumbers[i]) {
        return false;
      } else {
        obj[systemNames[i]] = stepNumbers[i];
      }
    } else {
      obj[systemNames[i]] = stepNumbers[i];
    }
  }
  console.log(obj);

  return true;
}

// console.log(
//   launchSequenceChecker(
//     [
//       'stage_1',
//       'stage_2',
//       'dragon',
//       'stage_1',
//       'stage_2',
//       'dragon',
//     ],
//     [1, 10, 11, 2, 12, 111]
//   )
// );
// console.log(
//   launchSequenceChecker(
//     ['stage_1', 'stage_1', 'stage_2', 'dragon'],
//     [2, 1, 12, 111]
//   )
// );
