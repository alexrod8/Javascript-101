function century(year) {
  let centuryNum = Math.ceil(year / 100);
  let suffix = getSuffix(centuryNum);
  return centuryNum + suffix;
}
function getSuffix(centuryNum) {
  if (centuryNum >= 11 && centuryNum <= 13) {
    return "th";
  }
  let lastDigit = centuryNum % 10;
  switch (lastDigit) {
    case 1:
      return "st";
      break;
    case 2:
      return "nd";
      break;
    case 3:
      return "rd";
      break;
    default:
      return "th";
  }
}

// return vaule is a string not number

century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
century(2010); // 20th