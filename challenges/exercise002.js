export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	const PEOPLE_PER_BUS = 40;
	return Math.ceil(people / PEOPLE_PER_BUS);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
	return arr.filter((animal) => animal === 'sheep').length;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	const isMPostcode = person?.address?.postCode.charAt(0) === 'M';
	const isCityManchester = person?.address?.city === 'Manchester';

	return isMPostcode && isCityManchester;
}
/* 
	Interpreting the requirement based on the the test cases, the 
	solutions could also just be boiled down to: 

	return person?.address?.city === 'Manchester';

	(as Manchester will always have M in its postcode)
*/