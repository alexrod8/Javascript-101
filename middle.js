// function that takes a string and returns the middle character(s) of the string

const centerOf = (str) => {
  let middle = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str[middle - 1] + str[middle];
  } else {
    return str[middle];
  }
};

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
