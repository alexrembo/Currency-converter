export let findUniqueAndEUR = (x, arrCorel, arrEUR) => {
  let uniqueAndEUR = [];  
  for (let i = 0; i < x.length; i++) {
    let str = x[i]; 
    uniqueAndEUR.push({'uniqueRate': str});
  }
  for (let i = 0; i < x.length; i++) {
    let arr = []; 
    let str = x[i]; 
    for (let j = 0; j < arrCorel.length; j++) { 
      if (arrCorel[j].rate == str) arr.push(arrEUR[j].rate);
    }
    uniqueAndEUR[i].EUR = arr;
  }
  return uniqueAndEUR;
}