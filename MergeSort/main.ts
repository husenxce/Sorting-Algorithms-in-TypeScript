import {MergeSort} from './Mergesort'

let arry:number[] = [];

for(let i = 0; i<15000; i++){
	arry[i] =Math.floor(Math.random() * 15000) + 1;
}

console.log('Unsorted');
console.time('time to sort');

let sorter:MergeSort = new MergeSort();
sorter.sort(arry);

console.timeEnd('time to sort');
console.log('time to sort');