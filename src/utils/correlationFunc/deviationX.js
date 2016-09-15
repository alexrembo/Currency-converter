export let findDeviationAndAverageX = (nGor, x) => {
  let sum1 = 0;
  let sum2 = 0;
  let nTotal = 0;
  let dispersionX = 0;
  let averageX = 0;
  for (let i = 0; i < nGor.length; i++) {
    nTotal += nGor[i];
  }
  for (let i = 0; i < x.length; i++) {
    sum1 += nGor[i] * x[i];
    sum2 += nGor[i] * Math.pow(x[i], 2);
  }
  averageX = sum1 / nTotal;
  dispersionX = sum2 / nTotal - Math.pow(averageX, 2);
  return {'deviationX': Math.floor(Math.sqrt(dispersionX) * 100) / 100, 'averageX': averageX, 'nTotal': nTotal};
}