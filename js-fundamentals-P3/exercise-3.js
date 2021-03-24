// Exercise 3
//
// Part 1 - Write
// ---------------
// Write a function that expects 2 numbers as input (e.g. 1, 2)
// and returns the sum of the two numbers.
//
// - If anything other than 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
// `typeof 3` returns 'number'

const sum = (num1, num2) => {
  // Your code here
  if (!num1 !== "number" || !num2 !== "number") {
    return undefined;
  }
  return num1 + num2;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
