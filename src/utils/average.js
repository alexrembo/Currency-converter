import {arr, obj} from '../api/loadData'

export let findAverageAndLength = currency => {
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].rate;
  }
  const average = Math.round(sum / length * 1000) / 1000;
  obj[currency].average = average;
  obj[currency].length = length;
}