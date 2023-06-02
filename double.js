function crunch(string) {
  if (string.length <= 1) {
    return string;
  }
   if (string[0] === string[1]) {
     return crunch(string.substring(1));
   }
  else {
    return string[0] + crunch(string.substring(1));
  }
}
console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""


