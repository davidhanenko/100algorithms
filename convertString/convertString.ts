export function convertString(s: string, t: string): boolean {
  for(let i=0; i<t.length; i++) {
    if(s.includes(t[i])) {
     s = s.slice(s.indexOf(t[i]))
    } else return false;
  }
  return true
}

// console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
// console.log(convertString('addbyca', 'abcd'));
