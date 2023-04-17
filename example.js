const input = require('readline-sync');

const correctPassword = '12262003';

function answer() {
let text = input.question('What is your username: ');
console.log('Hi alex !');
let text2 = input.question('Password: ')
if(text2 === correctPassword ) {
  console.log('Welcome in Alex!');
} else
   console.log('incorrect');
}

answer();