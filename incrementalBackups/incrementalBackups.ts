export function incrementalBackups( lastBackupTime: number, changes: number[][] ): number[] {
  const res = [];
  changes.sort( ( a, b ) => a[1] - b[1] );
  changes = changes.filter(el => el[0] > lastBackupTime);

  changes.forEach( el => {
   if(!res.includes(el[1])) res.push(el[1]) 
  })
  return res;
}

// console.log(incrementalBackups(461620205, [[461620203, 1], 
//     [461620204, 2], 
//     [461620205, 6],
//     [461620206, 5], 
//     [461620207, 3], 
//     [461620207, 5], 
//     [461620208, 1]]));
