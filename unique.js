//Given two strings, return the characters that are not common in the two strings.

function uniqueStringCharacters(str1, str2) {
  let connectedStr = str1 + str2;
  let result = "";
  for (let i = 0; i < connectedStr.length; i++) {
    let letter = connectedStr[i];
    if (connectedStr.indexOf(letter) === connectedStr.lastIndexOf(letter)) {
      //result += letter;
      //console.log(result += letter);
      console.log(connectedStr.indexOf(letter));
      console.log(connectedStr.lastIndexOf(letter));
    }
  }
  return result;
}
//xyabxzca
console.log(uniqueStringCharacters("xyab", "xzca") === "ybzc");
console.log(uniqueStringCharacters("a", "z") === "az");
console.log(uniqueStringCharacters("abcd", "de") === "abce");
console.log(uniqueStringCharacters("abc", "abba") === "c");
console.log(uniqueStringCharacters("xyz", "zxy") === "");
