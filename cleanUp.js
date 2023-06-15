// returns a string with non-alphabetic characters
// Trims off any spaces

function cleanUp(str) {
  let vaildWords = str.replace(/[^a-zA-Z]+/g, " ");
  let trim = vaildWords.trim();
  console.log(trim);
}

cleanUp("---what's my +*& line?"); // " what s my line "
