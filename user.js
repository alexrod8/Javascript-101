// ask the user for it's name
// if it ends with ! then print out Why are you screaming
// else print out hello name

const readline = require("readline-sync");

let name = readline.question("What is your name?");

let exclamationMarkName = name.endsWith("!");

if (exclamationMarkName) {
  console.log(`Hello ${name} Why are you screaming?`.toUpperCase());
} else {
  console.log("Hello " + name + ".");
}
