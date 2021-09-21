export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  // return Math.floor( desiredHeight / ( upSpeed - downSpeed ) );
  
  let days = 0;
  let curHeight = 0;

  while ( curHeight < desiredHeight ) {
    days++;
    curHeight += upSpeed;

    if ( curHeight < desiredHeight ) {
      curHeight -= downSpeed;
    }
  }
  return days;
}

// console.log(growingPlant(100, 10, 910))