// https://codesandbox.io/s/m2d1-loops-2-v8yvv?file=/index.js

// Exercise 1
// Write a program that output all of the numbers from 0 to 25
for (let number = 0; number <= 25; number++) {
  console.log(number);
}

// Exercise 2
// Write a program that output all of ODD the numbers from 0 to 25
for (let num = 0; num <= 25; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
// or
for (let num = 1; num <= 25; num = num + 2) {
  console.log(num);
}

// Exercise 3
// Write a program that output all of the numbers from 0 to 25,
// but replaces all multipes of `5` by the phrase `five alive!`
for (let num = 0; num <= 25; num++) {
  if (num === 0) {
    console.log(num);
  } else if (num % 5 === 0) {
    console.log("five alive!");
  } else {
    console.log(num);
  }
}
for (let num = 0; num <= 25; num++) {
  if (num % 5 === 0 && num !== 0) {
    console.log("five alive!");
  } else {
    console.log(num);
  }
}
