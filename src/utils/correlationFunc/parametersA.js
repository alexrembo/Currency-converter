export let findParametersA = (amountY, uniqueAndEUR, y1, y2) => {
  let a = [];
  const amount = amountY / 2;
  for (let i = 0; i < uniqueAndEUR.length; i++) {
    let aGor = [];
    for (let k = 0; k < amount; k++) {      
      let num = 0;
      for (let j = 0; j < uniqueAndEUR[i].EUR.length; j++) {
        if (y1[k] < uniqueAndEUR[i].EUR[j] && y2[k] > uniqueAndEUR[i].EUR[j]) num++;
      }
      aGor.push(num);
    }
    a.push(aGor);
  }
  return a;
}