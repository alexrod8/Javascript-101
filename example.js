const input = require('readline-sync');

const correctPassword = '12262003';

function answer() {
let username = input.question('What is your username: ');
console.log('Hi ' + username);
let password = input.question('Password: ')
if(password === correctPassword ) {
  console.log('Welcome in ' + username);
} else
   console.log('Incorrect!');
   input.question('Try again: ')
}

answer();