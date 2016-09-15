import {arr, obj} from '../api/loadData'

export let findMax = currency => {
	let max = arr[0].rate;
	let maxDate = [];
	for (let i = 0; i < arr.length; i++) {
	if (arr[i].rate > max) max = arr[i].rate;
	}
	for (let i = 0; i < arr.length; i++) {
	if (arr[i].rate == max) maxDate.push(arr[i].date);
	}
	obj[currency].max = {'value': max, 'date': maxDate};
}