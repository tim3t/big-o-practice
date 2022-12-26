function countZeroes(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
	let middleVal = arr[middleIdx];
}

module.exports = countZeroes;
