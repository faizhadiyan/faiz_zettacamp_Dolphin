/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */

const readlineSync = require('readline-sync');

function majorityElement(nums) {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

// Get user input
const userInput = readlineSync.question('Enter numbers separated by commas: ');
const userNumbers = userInput.split(',').map(Number);

// Check if all input values are integers
const allIntegers = userNumbers.every((num) => Number.isInteger(num));

if (!allIntegers) {
  console.log('Error: Input contains non-integer values.');
} else {
  // Call the function and display the result
  const result = majorityElement(userNumbers);
  console.log('Majority Element:', result);
}
