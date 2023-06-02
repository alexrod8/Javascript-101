function duplicate (number) {
  let result = ''
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
}


console.log(duplicate(6));
duplicate(5);
console.log(duplicate(9));
duplicate(8);