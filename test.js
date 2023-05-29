function debug(msg) {
  let debug = true;
  if (debug) {
    console.log('DEBUG: ' + msg);
  }
}
function multisum(num) {
  debug("Checking " + num);
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    debug("i =" + i);
    if (i % 3 === 0 || i % 5 === 0) {
      debug("match");
      sum += i;
    }
    debug("Sum = " + sum);
  }
  debug("returning = " + sum);
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(6)); // 33
console.log(multisum(10000)); // 234168