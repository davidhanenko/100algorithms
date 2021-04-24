export function almostIncreasingSequence(sequence: number[]): boolean {

  let counter = 0;

  for (let i = 0; i<sequence.length; i++) {
    if(sequence[i] > sequence[i+1]) {
      counter++
    }
  }
  return counter <= 1 ? true : false 

}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 