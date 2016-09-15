import {arr, obj} from '../api/loadData'

export let findFromAverage = currency => {
  let amountDays = 0;
  const average = obj[currency].average;
  const from = average * 0.95; 
  const to = average * 1.05;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rate < to && arr[i].rate > from) {
      amountDays++; 
    }
  }
  obj[currency].amountDays = amountDays;
}