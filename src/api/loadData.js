export let arr;
export let obj = {};

export let loadData = currency => {
  console.clear();
  obj[currency] = {};
  let roundArr = arr => {
    for (let i = 0; i < arr.length; i++) {
      if(!arr[i].rate) continue;
      arr[i].rate = Math.floor(arr[i].rate * 100) / 100; 
    }
    return arr;
  }
  console.log('Please wait a few seconds');
  console.log(currency);
  let url = 'data/' + currency + '.json';
  let parseJson = response => {
    return response.json().then( data => {
      console.log(data);
      arr = roundArr(JSON.parse(data));
      arr = arr.filter( value => value != 0 );
      obj[currency].data = arr;
    });
  };
  fetch(url)
  .then(parseJson);
}