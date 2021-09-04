export function almostIncreasingSequence(sequence: number[]): boolean {

  let count = 0;
  
  for ( let i = 1; i < sequence.length; i++ ) {
     
      if (
        (sequence[i] >= sequence[i - 1] && sequence[i] >= sequence[i + 1]) ||
        (sequence[i] <= sequence[i - 1] && sequence[i] <= sequence[i + 1])
      ) {
        count++;
      }
  }
  if ( count > 1 ) {
    return false
  }
  return true
}

// console.log(almostIncreasingSequence([ 4, 2, 3])) 
// console.log(almostIncreasingSequence([1, 2, 3, 2, 4, 5, 6])) 