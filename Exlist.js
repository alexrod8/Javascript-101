function oddities(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      //console.log(array[i]);
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
