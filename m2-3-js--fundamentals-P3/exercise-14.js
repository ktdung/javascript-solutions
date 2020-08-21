// Exercise 2-14
// -------------

// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // Your code here
  const charArr = paragraph.split("");
  let res = "";

  for (let i = 0; i < charArr.length; i++) {
    if (i % 40 === 0 && i > 0) {
      res += "\n";
      if (charArr[i] !== " ") {
        res += charArr[i];
      }
    } else {
      res += charArr[i];
    }
  }

  return res;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
