// Example 1 .length
const sentiment = "I love programming";
console.log(sentiment.length); // 18

// Example 2.1 .replace()
const food = "I love bacon";
food.replace("bacon", "avocado");
console.log(food); // "I love bacon.'

// Example 2.2 .replace()
const newFood = food.replace("bacon", "avocado");
console.log(newFood); // "I love avocado.'

// Example 3 .slice()
const sentence = "Bingo was his name.";
console.log(sentence.slice(0, 9)); // "Bingo was"

// Example 4 .concat()
let partOne = "Do or do not.";
let partTwo = "There is no try.";
console.log(partOne.concat(partTwo)); // ?

// Can you get a space into there, between the 2 parts,
// without changing the original strings?
console.log(partOne.concat(" ").concat(partTwo)); // "Do or do not. There is no try."

// Example 5 .split()
const truth = "The greatest teacher, failure is.";
console.log(truth.split(",")); // ["The greatest teacher", " failure is."]
console.log(truth.split(", ")); // ["The greatest teacher", "failure is."]
console.log(truth.split(" ")); // ["The", "greatest", "teacher,", "failure", "is."]

// Example 6 .indexOf()
let yodaSpeak =
  "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
const darkSideIndex = yodaSpeak.indexOf("dark side");
const jediIndex = yodaSpeak.indexOf("jedi");
console.log(darkSideIndex, jediIndex); // 24, -1

// EXERCISES
// Turn an input string into another string

// Exercise 1
// desired output: "sentence, look how"
const longSentence = "I am a really long sentence, look how many words I have!";
console.log(longSentence.slice(19, 37));

// Exercise 2
// desired output: "Hello world!"
const greeting = "Hi World!";
console.log(greeting.replace("Hi", "Hello"));

// Exercise 3
// desired output: "I am old!"
const age = "I am 23 years old!";
let ageAmended = age.replace(" 23 years", "");
console.log(ageAmended);

// Exercise 4
// desired output: ["how", "are", "you", "yesterday?"]
const ask = "How are you today?";
const newAsk = ask.replace("today", "yesterday").split(" ");
console.log(newAsk);
