
// if postive and odd return true

function isOdd (num1) {
if(Math.abs(num1) % 2 === 1){
  return true;
} else{
  return false;
}
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true