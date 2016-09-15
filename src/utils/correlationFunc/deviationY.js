export let findDeviationAndAverageY = (nTotal, nVer, amountY, y1, y2) => {
  let dispersionY = 0;
  let newY = [];
  let sum1 = 0;
  let sum2 = 0;
  let averageY = 0;
  for (let i = 0; i < amountY / 2; i++) {
    let arr = (y2[i] + y1[i]) / 2;
    newY.push(arr);
  }
  for (let i = 0; i < newY.length; i++) {
    sum1 += nVer[i] * newY[i];
    sum2 += nVer[i] * Math.pow(newY[i], 2);
  }
  averageY = sum1 / nTotal;
  dispersionY = sum2 / nTotal - Math.pow(averageY, 2);
  return {'deviationY': Math.floor(Math.sqrt(dispersionY) * 100) / 100, 'averageY': averageY, 'y': newY};
}