export function ratingThreshold(threshold: number, ratings: number[][]): number[] {

  let res = [];

  ratings.forEach( ( el, i ) => {
    let r = (el.reduce( ( a, b ) => a + b )) / el.length;

    r < threshold && res.push( i );
  })

  return res;

}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));