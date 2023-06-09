// write a function that determines the mean (average) of the three scores passed to it
// and returns the letter associated with that grade.

function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;
  if (average > 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(70, 81, 90)); // "B"
console.log(getGrade(70, 76, 80)); // "C"
console.log(getGrade(50, 50, 95)); // "D"
console.log(getGrade(60, 40, 65)); // "F"


