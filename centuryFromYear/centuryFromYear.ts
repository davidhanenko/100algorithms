export function centuryFromYear(year: number): number {
  return year % 100 !== 0 ? Math.ceil(year / 100) : year / 100;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
