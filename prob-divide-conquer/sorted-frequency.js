function sortedFrequency(arr, target) {
	let first = findFirst(arr, target);
	if (first == -1) return first;
	let last = findLast(arr, target);
	return last - first + 1;
}

function findFirst(arr, target, low = 0, high = arr.length - 1) {
	while (high >= low) {
		let midIdx = Math.floor((low + high) / 2);
		if ((midIdx === 0 || target > arr[midIdx - 1]) && arr[midIdx] === target) {
			return midIdx;
		}
		else if (target > arr[midIdx]) {
			return findFirst(arr, target, midIdx + 1, high);
		}
		else {
			return findFirst(arr, target, low, midIdx - 1);
		}
	}
	return -1;
}

function findLast(arr, target, low = 0, high = arr.length - 1) {
	while (high >= low) {
		let midIdx = Math.floor((low + high) / 2);
		if ((midIdx === arr.length - 1 || target < arr[midIdx + 1]) && arr[midIdx] === target) {
			return midIdx;
		}
		else if (target < arr[midIdx]) {
			return findLast(arr, target, low, midIdx - 1);
		}
		else {
			return findLast(arr, target, midIdx + 1, high);
		}
	}
	return -1;
}

module.exports = sortedFrequency;
