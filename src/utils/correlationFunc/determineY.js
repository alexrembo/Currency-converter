export let determineY = (amountY, yMin, b) => {
  let y = [];
  let y1 = [];
  let y2 = [];
  for (let i = 0; i < amountY / 2; i++) {
    y1[i] = yMin + i * b + i;
    y2[i] = yMin + (i + 1) * b + i;
  }
  y.push(y1, y2);
  return y;
}