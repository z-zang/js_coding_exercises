import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns multiple sum of 3s and 5s in array", () => {
    expect(sumMultiples([5, 3])).toBe(8);
    expect(sumMultiples([5, 7, 3, 2, 1, 9, 10])).toBe(27);
    expect(sumMultiples([1, 7, 2, 2, 1, 4])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true if string only contains ATCG characters", () => {
    expect(isValidDNA("hello")).toBe(false);
    expect(isValidDNA("ATCGTAGCTGAC")).toBe(true);
    expect(isValidDNA("ATCGACTGA blah blah blah")).toBe(false);
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns a string of complimentary base pairs", () => {
    expect(getComplementaryDNA('ACTG')).toBe('TGAC');
    expect(getComplementaryDNA('AAAAAAAAAAA')).toBe('TTTTTTTTTTT');
    expect(getComplementaryDNA('AAACCCTTTGGG')).toBe('TTTGGGAAACCC');
  });
});

describe("isItPrime", () => {
  test("returns true for prime numbers", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(23)).toBe(true);
    expect(isItPrime(47)).toBe(true);
    expect(isItPrime(151)).toBe(true);
  });
  test("returns false for non prime numbers", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(25)).toBe(false);
    expect(isItPrime(808)).toBe(false);
    expect(isItPrime(10000)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns an array of size n, of arrays size n, with each element being the fill", () => {
    expect(createMatrix(4, 7)).toStrictEqual([[7, 7, 7, 7], [7, 7, 7, 7], [7, 7, 7, 7], [7, 7, 7, 7]]);
    expect(createMatrix(2, 'potato')).toStrictEqual([['potato', 'potato'], ['potato', 'potato']]);
    const obj = { a: 1, b: 2, c: { d: 3 } }
    expect(createMatrix(3, obj)).toStrictEqual([[obj, obj, obj], [obj, obj, obj], [obj, obj, obj]]);
  });
});

describe("areWeCovered", () => {
  test("returns true if at least 3 staff are scheduled for the specified day", () => {
    let mockStaff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "M", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
    ]
    expect(areWeCovered(mockStaff, 'Tuesday')).toBe(true);
    expect(areWeCovered(mockStaff, 'Wednesday')).toBe(true);
    expect(areWeCovered(mockStaff, 'Monday')).toBe(false);
    expect(areWeCovered(mockStaff, 'Sunday')).toBe(false);
    // is not a case-sensitive solution
  });

});