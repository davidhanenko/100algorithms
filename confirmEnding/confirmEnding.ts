export function confirmEnding(str: string, target: string) {
  console.log(str.substring(target.length));
  return str.substring(target.length-1) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));