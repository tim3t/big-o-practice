function countZeroes(arr) {
	let first = findZeroStart(arr);
	if (first === -1) return 0;
	return arr.length - first;
}

function findZeroStart(arr, left = 0, right = arr.length - 1) {
	if (right >= left) {
		let middle = left + Math.floor((right - left) / 2);
		if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
			return middle;
		}
		else if (arr[middle] === 1) {
			return findZeroStart(arr, middle + 1, right);
		}
		return findZeroStart(arr, left, middle - 1);
	}
	return -1;
}

module.exports = countZeroes;
