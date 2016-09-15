export let findN = (a, amountY) => {
  let nGor = [];
  let nVer = [];
  let n = [];
  for (let i = 0; i < a.length; i++) {
    let num = 0;
    for (let j = 0; j < a[i].length; j++) {
      num += a[i][j];
    }
    nGor.push(num);
  }
  for (let i = 0; i < amountY / 2; i++) {
    nVer[i] = 0;
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      nVer[j] += a[i][j];
    }
  }
  n.push(nGor, nVer);
  return n;
}