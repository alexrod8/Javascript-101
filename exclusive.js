function xor(var1, var2) {
  if ((var1 && !var2) || (!var1 && var2)) {
    return true;
  }

  return false;
}

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
