export function fancyRide( l: number, fares: number[] ): string {
  
  const cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

  let ride = Math.max(...fares.map(el => el * l).filter(el => el <= 20));
  
  return cars[fares.indexOf(ride/l)];
}

// console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));