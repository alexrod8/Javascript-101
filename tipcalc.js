const input = require('readline-sync');

function calculator () {
  let bill = parseFloat(input.question('What is the bill? '));
  let tip = parseFloat(input.question('What is the tip percentage? '));
  
  let percent = bill * (tip /100);
  let afterTotal = (bill + percent);
  

  console.log('The tip is ' + '$' + percent);
  console.log('The total is ' + '$' + afterTotal);

}

calculator();