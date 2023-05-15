export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const smallNums = nums.filter((num) => num < 1)
	return smallNums
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	const beginWithCharNames = names.filter((personName) => {
		return personName.charAt(0) === char
	})
	return beginWithCharNames
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here

	const verbs = words.filter(word => {
		const wordArray = word.split(' ')
		return wordArray[0] === 'to'
	})

	return verbs
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(num => Number.isInteger(num))
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	const cities = users.map(user => {
		return user.data.city.displayName
	})
	return cities
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const squares = nums.map((num) => Math.round(Math.sqrt(num) * 100) / 100 )
	return squares
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here

	const validSentences = sentences.filter((sentence) => {
		return sentence.toLowerCase().includes(str.toLowerCase())
	})

	return validSentences
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here

	const longestSides = [];
	triangles.forEach(triangle => {
		const sidesOrdered = triangle.sort((a, b) => a - b);
		longestSides.push(sidesOrdered[2])
	})

	return longestSides
}
