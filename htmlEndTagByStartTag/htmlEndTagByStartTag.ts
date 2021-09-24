export function htmlEndTagByStartTag(startTag: string): string {
  let arr = startTag.split('');
  arr.splice(1, 0, '/');

  arr = arr.join('').split(' ')[0];

  return arr[arr.length - 1] === '>' ? arr : (arr += '>');
}

// console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
// console.log(htmlEndTagByStartTag('<i>'));
