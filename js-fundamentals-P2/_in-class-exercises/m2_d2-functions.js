// Example 1

// Formula for area of rectangle
area equals length times width

// Turn that into a more math-like function...
a = l * w

// Define JavaScript function
const area = function (length, width) {
  return length * width;
};

// Call the JavaScript function
const myRectangle = area(12, 10);
console.log(myRectangle);


// Example 2

// Formula for area of circle
area equals pi times radius squared

// Define JavaScript function
const area = function(radius) {
  return 3.14 * radius * radius;
}

// Call the JavaScript function
const myCircle = area(12, 10);
console.log(myCircle);

// EXERCISES
// Q1. Write a function that returns the sum of 3 numbers.
const sum = function(num1, num2, num3) {
  return num1 + num2 + num3;
}

// Q2. Write a function that returns the square of a number
// minus twice the number.
const mathStuff = function(num) {
  return (num * num) - (2 * num);
}

// Q3. Write a function that returns the a person's full name,
// given their first and last names.
const getFullName = function(first, last) {
  return `${first} ${last}`;
  // or
  // return first + ' ' + last;
}

// Q4. Write a function that returns the value of the tax (15%)
// for a given amount.
const tax = function (amount) {
  return amount * 0.15;
};

// Q5. Write a function that returns the value 42.
const meaningOfLife = function () {
  return 42;
};

// Q6. Write a function that returns "Hello!".
const greetings = function () {
  return 'Hello!';
};
