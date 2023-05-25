// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!

	const capitalfirstLetter = word.charAt(0).toUpperCase();

	return `${capitalfirstLetter}${word.slice(1)}`;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!
	const firstInitial = firstName.charAt(0);
	const lastInitial = lastName.charAt(0);

	return `${firstInitial}.${lastInitial}`;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!

	const calculatedVatAmount = Math.floor(vatRate * originalPrice) / 100;

	return originalPrice + calculatedVatAmount;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!

	const priceAfterReduction = originalPrice - (originalPrice * reduction/100);
	const roundedFinalPrice = Math.round(priceAfterReduction * 100) / 100;

	return roundedFinalPrice;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!

	const length = str.length;

	if (length % 2 === 0) {
		const firstChar = str.charAt((length / 2) - 1)
		const secondChar = str.charAt(length / 2)
		return `${firstChar}${secondChar}`
	}
	else {
		return str.charAt(Math.floor(length / 2))
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!

	return words.map(word => reverseWord(word)); // hope this doesn't count as cheating ;)
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
	return users.filter((user) => {
		return user?.type === 'Linux';
	}).length
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!

	const amountOfNumbers = scores.length;
	const totalSum = scores.reduce((acc, curr) => acc + curr);
	const roundedAverage = Math.round(totalSum / amountOfNumbers * 100) / 100;

	return roundedAverage;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!

	if (n % 5 === 0 && n % 3 === 0) {
		return 'fizzbuzz';
	} else if (n % 5 === 0) {
		return 'buzz';
	} else if (n % 3 === 0) {
		return 'fizz';
	} else {
		return n;
	}
}
