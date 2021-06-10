export function containsDuplicates(a: number[]): boolean {

 let newArr = new Set(a)
 return newArr.size !== a.length
 
}

// console.log(containsDuplicates([1, 2, 3, 1]));
// console.log(containsDuplicates([3, 1]));
