export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const smallNums = nums.filter((num) => num < 1);
	return smallNums;

	/*	Alternative solution:

		const smallNums = [];

		for (let i = 0; i < nums.length; i++) {
			nums[i] < 1 && smallNums.push(nums[i]);
		}
		return smallNums;
	*/
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	const beginWithCharNamesArr = names.filter((personName) => {
		return personName.charAt(0) === char;
	})
	return beginWithCharNamesArr;

	/*	Alternative solution:
		
		const beginWithCharNamesArr = [];

		for (let i = 0; i < names.length; i++) {
			names[i].charAt(0) === char && beginWithCharNamesArr.push(names[i]);
		}

		return beginWithCharNamesArr;
	*/
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here

	const verbs = words.filter(word => {
		const wordArray = word.split(' ');
		const isVerb = wordArray[0] === 'to';
		return isVerb;
	})

	return verbs;

	/*	Alternative solution:

		const verbs = [];

		for (let i = 0; i < words.length; i++) {
			const wordArray = words[i].split(' ');
			const isVerb = wordArray[0] === 'to';
			isVerb && verbs.push(words[i]);
		}

		return verbs;
	*/
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(num => Number.isInteger(num));

	/*	Alternative solution:
		
		const integers = [];

		for (let i = 0; i < nums.length; i++) {
			Number.isInteger(nums[i]) && integers.push(nums[i]);
		}

		return integers;
	*/
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	const cities = users.map(user => {
		return user.data.city.displayName;
	})
	return cities;

	/*	Alternative solution:
		
		const cities = [];

		for (let i = 0; i < users.length; i++) {
			cities.push(users[i].data.city.displayName);
		}

		return cities;
	*/
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const squares = nums.map((num) => Math.round(Math.sqrt(num) * 100) / 100);
	return squares;

	/*	Alternative solution:
		
		const squares = [];
		for (let i = 0; i < nums.length; i++) {
			const square = Math.round(Math.sqrt(nums[i]) * 100) / 100;
			squares.push(square);
		}

		return squares;
	*/
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here

	const validSentences = sentences.filter((sentence) => {
		return sentence.toLowerCase().includes(str.toLowerCase());
	})

	return validSentences;

	/*	Alternative solution:
		
		const validSentences = [];

		for (let i = 0; i < sentences.length; i++) {
			const isInSentence = sentences[i].toLowerCase().includes(str.toLowerCase());
			isInSentence && validSentences.push(sentences[i]);
		}

		return validSentences;
	*/
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here

	const longestSides = [];
	triangles.forEach(triangle => {
		const sidesOrderedAscending = triangle.sort((a, b) => a - b);
		longestSides.push(sidesOrderedAscending[2]);
	})

	return longestSides;

	/*	Alternative solution:
		
		const longestSides = [];

		for (let i = 0; i < triangles.length; i++) {
			const largestSide = Math.max(...triangles[i]);
			longestSides.push(largestSide);
		}

		return longestSides;
	*/
}
