const input = require("readline-sync");

let age = input.question("What is your age? ");
let retireAge = input.question("At what age would you like to retire? ");

let yearsLeft = Number(retireAge) - Number(age);

let today = new Date();
let currentYear = today.getFullYear();

let retirementYear = currentYear + Number(retireAge);

console.log(`Its ${currentYear}. You will retire in ${retirementYear} `);

console.log(`You only have ${yearsLeft} years left to work!`);
