export function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  const obj = {};
  const arr = [];

  for (let i = 0; i < pros.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      obj[preferences[i][j]]
        ? obj[preferences[i][j]].push(pros[i])
        : (obj[preferences[i][j]] = [pros[i]]);
    }
  }
  for (let k of Object.keys(obj)) {
    arr.push([[k], obj[k]]);
  }
  return arr.sort();
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      [
        'Computer lessons',
        'Computer repair',
        'Data recovery service',
      ],
      ['Computer lessons', 'House cleaning'],
    ]
  )
);
