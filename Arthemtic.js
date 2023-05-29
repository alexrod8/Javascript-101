// gets first number
// then second number
// Gets all opreations and shows what it does to those two numbers

const readline = require("readline-sync");

function prompt(msg) {
  console.log("===> " + msg);
}

prompt("Whats the first number: ");
let num1 = readline.question();
prompt("Whats the second number: ");
let num2 = readline.question();

let add = Number(num1) + Number(num2);
let subtract = Number(num1) - Number(num2);
let product = Number(num1) * Number(num2);
let divide = Number(num1) / Number(num2);
let remainder = Number(num1) % Number(num2);
let power = Number(num1) ** Number(num2);

prompt(`${num1} + ${num2} = ${add}`);
prompt(`${num1} - ${num2} = ${subtract}`);
prompt(`${num1} * ${num2} = ${product}`);
prompt(`${num1} / ${num2} = ${divide.toFixed(1)}`);
prompt(`${num1} % ${num2} = ${remainder}`);
prompt(`${num1} ** ${num2} = ${power}`);
