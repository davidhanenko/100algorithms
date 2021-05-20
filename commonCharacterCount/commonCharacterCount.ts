export function commonCharacterCount(s1: string, s2: string): number {
  let common = 0;

  const obj1 = {};
  const obj2 = {};

  for (let k of s1) {
    obj1[k] ? obj1[k]++ : (obj1[k] = 1);
  }

   for (let k of s2) {
    obj2[k] ? obj2[k]++ : (obj2[k] = 1);
  }

  console.log(obj1);
  console.log(obj2);
  

  for (let k in obj2) {
    if (obj1.hasOwnProperty(k)) {
      obj1[k] <= obj2[k] ? common+= obj1[k] : common+= obj2[k]
    }
  }
  return common;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
