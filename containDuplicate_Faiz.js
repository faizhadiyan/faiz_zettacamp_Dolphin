// * write a function that returns true if there's duplicate in the array, and false otherwise.
// * SEE EXAMPLE BELLOW!
// *
// *
// Example
// console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
// console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

const readlineSync = require('readline-sync');

function containsDuplicate(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true; // Found duplicate
    }
    numSet.add(num);
  }

  return false; // No duplicates
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
  console.log(containsDuplicate(userNumbers));
}
