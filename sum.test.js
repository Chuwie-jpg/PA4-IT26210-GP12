// sum.test.js

const { sum, add, safeSum, mixedSum, addStringToArray } = require('./sum');

// Test for basic addition function
test('add adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
  expect(add(0.1, 0.2)).toBeCloseTo(0.3, 2);  // Test floating point precision
});

// Test for summing an array of numbers
test('sum sums an array of numbers correctly', () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
  expect(sum([-1, 2, 3])).toBe(4);
  expect(sum([0, 0, 0, 0])).toBe(0);
  expect(sum([1000000, 2000000, 3000000])).toBe(6000000);
});

// Test for safe sum (ignores invalid inputs)
test('safeSum ignores invalid numbers and sums correctly', () => {
  expect(safeSum([1, 2, "3", null, 4])).toBe(7);  // String and null are ignored
  expect(safeSum([1, 2, "abc", 4])).toBe(7);     // Non-numeric string is ignored
  expect(safeSum([1, NaN, 3, 5])).toBe(9);        // NaN is ignored
  expect(safeSum([0, 0, 0])).toBe(0);
});

// Test for summing mixed types in an array
test('mixedSum sums valid numbers in an array of mixed types', () => {
  expect(mixedSum([1, 2, "3", true, 4])).toBe(7);   // Only numbers are summed
  expect(mixedSum([1, false, 2.5, "string", null])).toBe(3.5);  // Ignoring false, string, null
  expect(mixedSum([1, "text", undefined, 3])).toBe(4);  // Only summing numbers
  expect(mixedSum([5, 10, 15])).toBe(30);  // All numbers
});

// Test for adding string to an array sum
test('addStringToArray adds a number from string to the sum of an array', () => {
  expect(addStringToArray("5", [1, 2, 3])).toBe(11);
  expect(addStringToArray("2.5", [1, 2, 3])).toBeCloseTo(8.5, 2);
  expect(() => addStringToArray("invalid", [1, 2, 3])).toThrow("Invalid string number.");
  expect(addStringToArray("0", [1, 2, 3])).toBe(6);
});

// Edge cases
test('sum should throw an error when input is not an array', () => {
  expect(() => sum(123)).toThrow("Input must be an array.");
  expect(() => sum("1,2,3")).toThrow("Input must be an array.");
  expect(() => sum(null)).toThrow("Input must be an array.");
});

test('safeSum should throw an error when input is not an array', () => {
  expect(() => safeSum("1,2,3")).toThrow("Input must be an array.");
  expect(() => safeSum(123)).toThrow("Input must be an array.");
  expect(() => safeSum(null)).toThrow("Input must be an array.");
});
