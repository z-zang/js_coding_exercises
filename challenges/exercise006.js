/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	const total = arr.reduce((accTotal, currentValue) => {
		const isValidMultiple = currentValue % 3 === 0 || currentValue % 5 === 0;

		return isValidMultiple ? accTotal += currentValue : accTotal;
	}, 0)

	return total
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error('str is required');

	const dnaRegex = new RegExp('^[ACGT]+$');
	return dnaRegex.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	const complementaryDnaArr = str.split('').map(((el) => {
		switch(el) {
			case 'A': 
				return 'T';
			case 'C':
				return 'G'
			case 'T':
				return 'A';
			case 'G':
				return 'C';

		}
	}))

	return complementaryDnaArr.join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');

	if (n === 2) {
		return true;
	}
	if (n < 2 || n % 2 === 0) {
		return false;
	}

	for (let i = 3; i * i <= n; i += 2) {
		if(n % i === 0) return false;
	}

	return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');

	const innerArrays = Array(n).fill(fill);
	const outerArray = Array(n).fill(innerArrays);

	return outerArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');

	let numOfStaffOnDay = 0;

	staff.forEach((person) => {
		person.rota.indexOf(day) !== -1 ? numOfStaffOnDay += 1 : null;
	})

	return numOfStaffOnDay >= 3;
};
