export function chunkyMonkey(arr: any[], size: number): any[][] {
 return [arr.slice(0, size), arr.slice(size)]
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));