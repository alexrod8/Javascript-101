function oddities(arrays) {
  //console.log(arrays);
  let newArray = [];

  for (let i = 0; i < arrays.length; i++) {
    if (i % 2 === 0) {
      //console.log(arrays[i]);
      newArray.push(arrays[i]);
    }
  }
  console.log(newArray);
  return(newArray);
}
oddities([2, 3, 4, 5, 6]); // logs [2, 4, 6]
oddities([1, 2, 3, 4, 5, 6]); // logs [1, 3, 5]
oddities(["abc", "def"]); // logs ['abc']
oddities([123]); // logs [123]
oddities([]); // logs []
