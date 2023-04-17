
// its an interactive code 

const input = require('readline-sync');

function room () {
let length = input.question('Enter the length of the room in meters: ');

 let widgth = input.question('Enter the width of the rooms in meters: ');


let areaMeters = length * widgth;

let areaFeet = areaMeters * 10.7639;



console.log('The area of this room is ' + areaMeters + ' square meters' + ' and ' + areaFeet.toFixed(2) + ' square feet');

}

room();