export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	const firstIndex = nums.indexOf(n);

	if (firstIndex === -1 || firstIndex === nums.length - 1) {
		return null;
	} else {
		return nums[firstIndex + 1];
	}

};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	let zeros = 0;
	let ones = 0;

	const onesZerosArray = str.split('');
	
	onesZerosArray.forEach((num) => {
		if (num === '0') zeros += 1;
		if (num === '1') ones += 1;
	})

	return {
		1: ones,
		0: zeros
	};
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	return Number(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
	const totalSum = arrs.reduce((acc, numArr) => {
		const arrSum = numArr.reduce((acc, num) => {
			return acc + num;
		}, 0);

		return acc + arrSum;
	}, 0);

	return totalSum;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	if (arr.length === 1) return arr;

	const first = arr.shift();
	const last = arr.pop();

	return [last, ...arr, first];
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!

    const foundValue = Object.values(haystack).find(value => {
		const isValueString = typeof value === 'string';
		return isValueString && value.toLowerCase().includes(searchTerm.toLowerCase());
	}) 

	return !!foundValue;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	const wordFreqObj = {};

	const lettersOnlyRegex = new RegExp("[.,\/#!?$%\^&\*;:{}=\-_`~()]", 'g');

	const strArr = str.toLowerCase().replace(lettersOnlyRegex, "").split(' ');

	strArr.forEach(word => {
		word in wordFreqObj ? wordFreqObj[word] += 1 : wordFreqObj[word] = 1;
	})

	return wordFreqObj;
};
