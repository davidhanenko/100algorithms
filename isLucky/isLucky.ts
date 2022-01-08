export function isLucky(n: number): boolean {

  const nArr = n.toString().split( '' );
  const half = nArr.length / 2;

  const left = nArr.slice( 0, half );
  const right = nArr.slice(half);
  
  const sum = ( arr ) => {
    return arr.reduce( ( a, b ) => +a + +b );
 }

  return sum( left ) === sum( right ) ? true : false;
  
}

console.log(isLucky(1230));
console.log(isLucky(239017));