const circle = require('./circle.js'),
square = require('./square.js');
const querystring = require('querystring');

//console.log(`the area of a circle for radius 4 is ${circle.area(4)} /n the area of square is ${square(4).area()}`);

//console.log(querystring.stringify(module));
console.log(circle.testModule());

console.log(`the area of square is ${square(4).area()}`);

console.log(circle.test());