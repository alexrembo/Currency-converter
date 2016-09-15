export let determineX = arr => {
  let unique = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].rate;
    unique[str] = true;
  }
  return Object.keys(unique);
}