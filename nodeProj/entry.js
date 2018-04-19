const circle = require('./circle.js'),
defaultVal = require('./circle.js').default,
square = require('./square.js');
const querystring = require('querystring');
const env = require('dotenv').config({ path: '.env.local' });
const react = require('react');
const reactdom = require('react-dom');


//console.log(`the area of a circle for radius 4 is ${circle.area(4)} /n the area of square is ${square(4).area()}`);

//console.log(querystring.stringify(module));
console.log(circle.testModule());

console.log(`the area of square is ${square(4).area()}`);

console.log(circle.default());
console.log(defaultVal());
//process.env.bar=45;


console.log(process.env.fg);
console.log(JSON.stringify({x:23}));
 