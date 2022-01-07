export function htmlEndTagByStartTag(startTag: string): string {
 let openTag = startTag.split(' ')[0].split('');

  openTag.splice( 1, 0, '/' );
  openTag[openTag.length-1] === '>' ? openTag :  openTag.push( '>' );
  return openTag.join( '' );
  
}

// console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
// console.log(htmlEndTagByStartTag('<i>'));
