##Step One: Simplifying Expressions
###Simplify the following big O expressions as much as possible:

- O(n + 10) <b> = O(n) </b>
- O(100 * n) <b> = O(n) </b>
- O(25) <b> = O(1) </b>
- O(n^2 + n^3) <b> = O(n^2) </b>
- O(n + n + n + n) <b> = O(n) </b>
- O(1000 * log(n) + n) <b> = O(log(n)) </b>
- O(1000 * n * log(n) + n) <b> = O(n * log(n)) </b>
- O(2^n + n^2) <b> = O(2n^2) </b>
- O(5 + 3 + 1) <b> = O(1) </b>
- O(n + n^(1/2) + n^2 + n * log(n)^10) <b> = O(n * log(n)^10 </b>

##Step Two: Calculating Time Complexity
###Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

	function logUpTo(n) {
  	for (let i = 1; i <= n; i++) {
   	 console.log(i);
  	}
	}

Time Complexity: O(n)

	function logAtLeast10(n) {
  	for (let i = 1; i <= Math.max(n, 10); i++) {
   	 console.log(i);
  	}
	}

Time Complexity: O(n)

	function logAtMost10(n) {
  	for (let i = 1; i <= Math.min(n, 10); i++) {
   	 console.log(i);
  	}
	}

Time Complexity: O(1)

	function onlyElementsAtEvenIndex(array) {
  	let newArray = [];
  	for (let i = 0; i < array.length; i++) {
  	  if (i % 2 === 0) {
   	   newArray.push(array[i]);
   	 }
 	 }
 	 return newArray;
	}

Time Complexity: O(n)

	function subtotals(array) {
  	let subtotalArray = [];
  	for (let i = 0; i < array.length; i++) {
  	  let subtotal = 0;
   	 for (let j = 0; j <= i; j++) {
   	   subtotal += array[j];
   	 }
   	 subtotalArray.push(subtotal);
  	}
  	return subtotalArray;
	}

Time Complexity: O(n^2)

	function vowelCount(str) {
	  let vowelCount = {};
	  const vowels = "aeiouAEIOU";

	  for (let char of str) {
	    if(vowels.includes(char)) {
	      if(char in vowelCount) {
	        vowelCount[char] += 1;
	      } else {
	        vowelCount[char] = 1;
  	    }
	    }
 	 }

	  return vowelCount;
	}

Time Complexity: O(n)

##Part 3 - short answer
###Answer the following questions

- True or false: n^2 + n is O(n^2).
- True or false: n^2 * n is O(n^3).
- True or false: n^2 + n is O(n).
- What’s the time complexity of the .indexOf array method?
- What’s the time complexity of the .includes array method?
- What’s the time complexity of the .forEach array method?
- What’s the time complexity of the .sort array method?
- What’s the time complexity of the .unshift array method?
- What’s the time complexity of the .push array method?
- What’s the time complexity of the .splice array method?
- What’s the time complexity of the .pop array method?
- What’s the time complexity of the Object.keys() function?

BONUS

- What’s the space complexity of the Object.keys() function?