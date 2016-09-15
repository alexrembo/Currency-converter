export let findColetiance = (averageX, averageY, nTotal, x, y, a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j]) sum += a[i][j] * x[i] * y[j]
    }
  }
  return Math.floor((sum / nTotal - averageX * averageY) * 100) / 100;
}