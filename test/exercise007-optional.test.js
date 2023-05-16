import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} from "../challenges/exercise007-optional";

describe.only("sumMultiples", () => {
  test("returns sum of digits of a number", () => {
    expect(sumDigits(12345)).toBe(15);
    expect(sumDigits(10000000001)).toBe(2);
  });
});

describe.only("createRange", () => {
  test("returns array of numbers starting and ending at provided values, of specified step", () => {
    expect(createRange(1, 9, 2)).toStrictEqual([1, 3, 5, 7, 9]);
    expect(createRange(12, 80, 16)).toStrictEqual([12, 28, 44, 60, 76]);
  });
  test("returns array of numbers starting and ending at provided values, of step 1 when no step value is specified", () => {
    expect(createRange(15, 20)).toStrictEqual([15, 16, 17, 18, 19, 20]);
  });
});

describe.only("getScreentimeAlertList", () => {
  test("returns list ", () => {
    const mockUsers = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
          { date: "2023-05-16", usage: { tiktok: 50, cookieClicker: 78 } },
      ]},
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 26, facebook: 80, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
          { date: "2023-05-16", usage: { pokemonGo: 147} },  
      ]},
    ]

    expect(getScreentimeAlertList(mockUsers, '2019-05-02')).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(mockUsers, '2019-06-13')).toEqual(["sam_j_1989"]);
    expect(getScreentimeAlertList(mockUsers, '2019-06-14')).toEqual([]);
    expect(getScreentimeAlertList(mockUsers, '2023-05-16')).toEqual(["beth_1234", "sam_j_1989"]);
  });
});

describe.only("hexToRGB", () => {
  test("returns ", () => {
    expect(hexToRGB('#FF1928')).toBe('rgb(255,25,40)');
    expect(hexToRGB('#A44200')).toBe('rgb(164,66,0)');
    expect(hexToRGB('#DAFF7D')).toBe('rgb(218,255,125)');
  });
});

describe.only("findWinner", () => {
  test("returns ", () => {
    let mockResult = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
    ]
    expect(findWinner(mockResult)).toBe('X');

    mockResult = [
      ["X", "0", null],
      ["0", null, "0"],
      ["X", null, "X"]
    ]
    expect(findWinner(mockResult)).toBe(null);

    mockResult = [
      ["X", "0", "0"],
      ["0", null, "0"],
      ["X", null, "0"]
    ]
    expect(findWinner(mockResult)).toBe('0');
  });
});