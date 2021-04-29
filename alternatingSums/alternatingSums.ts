export function alternatingSums(a: number[]): number[] {
  let team1 = 0;
  let team2 = 0;

  a.forEach((el, i) => {
    i % 2 === 0 ? (team1 += el) : (team2 += el);
  });
  return [team1, team2];
}

// console.log(alternatingSums([50, 60, 60, 45, 70]));
