export function isTandemRepeat(inputString: string): boolean {

  if ( inputString.length % 2 !== 0 ) return false;

  const half = inputString.length / 2;

  return inputString.slice( 0, half ) === inputString.slice( half ) ? true : false; 
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
