function twice(num) {
  let numAsString = num = String(num);
  console.log('Num:' + num)

  let firstHalf = numAsString.slice(0 , num.length / 2);
  let secondHalf = numAsString.slice(num.length / 2);
  console.log(firstHalf)
  console.log(secondHalf);
   if (firstHalf === secondHalf) {
     return num;
   } else {
     return num * 2;
   }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
