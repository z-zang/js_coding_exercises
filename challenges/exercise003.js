import { capitalize } from "./exercise001"; // Hope this doesn't count as cheating!

export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	if (nums.length === 0) return [];
	return nums.map((num) => num ** 2);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	const camelCasedArray = words.map((word, index) => {
		const isFirstWord = index === 0;
		return isFirstWord ? word : capitalize(word);
	})
	return camelCasedArray.join("");
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!

	let totalSubjects = 0;
	people.forEach((person) => {
		totalSubjects += person.subjects.length;
	})
	return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	return menu.some(menuItem => {
		return menuItem.ingredients.includes(ingredient);
	})
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!

	const duplicates = [];

	arr1.forEach(number => {
		const isInArr2 = arr2.indexOf(number) !== -1;
		const isInDuplicatesArr = duplicates.indexOf(number) === -1;

		isInArr2 && isInDuplicatesArr && duplicates.push(number);
	})

	return duplicates.sort((a, b) => a - b); 
	/* 
		I just realised for my previous submission, 
		I didn't add a callback fn to .sort()! Have added a test
		case to ensure numbers returned in ascending order
	
	*/
}
