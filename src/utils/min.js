import {arr, obj} from '../api/loadData'

export let findMin = currency => {
  let min = arr[0].rate;
  let minDate =[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rate < min) min = arr[i].rate;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rate == min) minDate.push(arr[i].date);
  }
  obj[currency].min = {'value': min, 'date': minDate};
}