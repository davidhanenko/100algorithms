export function makeArrayConsecutive2(
  statues: number[]
): number {
  let count = 0;

  statues.sort((a, b) => a - b);

  for (let i = 1; i < statues.length; i++) {
    let res = statues[i] - statues[i - 1];
    if (res !== 1) {
      count += res - 1;
    }
  }
  return count;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));
