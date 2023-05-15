// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!

	return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!

	return `${firstName.charAt(0)}.${lastName.charAt(0)}`
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!

	return originalPrice + Math.floor(vatRate * originalPrice) / 100
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!

	return Math.round((originalPrice - (originalPrice * reduction/100)) * 100) / 100
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!

	const length = str.length

	if (length % 2 === 0) {
		return `${str.charAt((length / 2) - 1)}${str.charAt(length / 2)}`
	}
	else if (length % 2 === 1) {
		return str.charAt(Math.floor(length / 2))
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word.split("").reverse().join("")
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
	return words.map(word => reverseWord(word))
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
	const linuxUsers = users.filter((user) => {
		return user.type === 'Linux'
	})
	return linuxUsers.length
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!

	const amount = scores.length
	const sum = scores.reduce((acc, curr) => acc + curr)
	return Math.round(sum / amount * 100)/100
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!

	if (n % 5 === 0 && n % 3 === 0) {
		return 'fizzbuzz'
	} else if (n % 5 === 0) {
		return 'buzz'
	} else if (n % 3 === 0) {
		return 'fizz'
	} else {
		return n
	}
}
