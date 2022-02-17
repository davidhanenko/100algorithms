export function minimalNumberOfCoins(
  coins: number[],
  price: number
): number {
  coins.sort( ( a, b ) => b - a );

  let res = 0;

  coins.forEach( el => {

    if ( price !== 0 ) {
      res = res + Math.floor( price / el );
      price = price % el
    } else return res;
  })
  return res;
}

// console.log(minimalNumberOfCoins([1, 2, 10], 28));
