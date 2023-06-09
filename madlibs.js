const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ')
let verb = readline.question('Enter a verb: ')
let adjective = readline.question('Enter a adjective: ')
let adverb = readline.question('Enter a adverb: ')


console.log(`Do Something ${noun} with ${verb}. Also make ${adjective} and ${adverb} work togther. `);
console.log(`Hello ${noun} is ${verb}. Anyone making ${adjective} and ${adverb} have fun. `);