// sum.js

/**
 * Sums numbers from an array of numbers.
 * @param {Array<number>} numbers - The numbers to sum.
 * @returns {number} - The sum of the numbers.
 */
function sum(numbers) {
    if (!Array.isArray(numbers)) throw new TypeError("Input must be an array.");
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  /**
   * Adds two numbers, handling both integers and floating point numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} - The sum of the two numbers.
   */
  function add(a, b) {
    return a + b;
  }
  
  /**
   * Sums an array of numbers, but skips invalid inputs like strings or null.
   * @param {Array<number|string|null>} numbers - The array with possible invalid numbers.
   * @returns {number} - The sum, ignoring invalid entries.
   */
  function safeSum(numbers) {
    if (!Array.isArray(numbers)) throw new TypeError("Input must be an array.");
    return numbers.filter(num => typeof num === 'number' && !isNaN(num))
                  .reduce((acc, num) => acc + num, 0);
  }
  
  /**
   * Sums all the numbers in an array of mixed types (strings, numbers, and booleans).
   * @param {Array<any>} items - The array with mixed types.
   * @returns {number} - The sum of all valid numbers.
   */
  function mixedSum(items) {
    if (!Array.isArray(items)) throw new TypeError("Input must be an array.");
    return items.filter(item => typeof item === 'number')
                .reduce((acc, num) => acc + num, 0);
  }
  
  /**
   * Converts a string to a number and adds it to the sum of an array.
   * @param {string|number} str - A string or number to sum with the array.
   * @param {Array<number>} arr - The array of numbers to sum.
   * @returns {number} - The final sum after adding the string-converted value.
   */
  function addStringToArray(str, arr) {
    if (typeof str === 'string') {
      str = parseFloat(str);
      if (isNaN(str)) throw new TypeError("Invalid string number.");
    }
    return sum(arr) + str;
  }
  
  module.exports = {
    sum,
    add,
    safeSum,
    mixedSum,
    // addStringToArray
  };
  