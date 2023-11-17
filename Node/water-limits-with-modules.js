/* water-limits-with-modules.js
In this case, ./ is a relative path indicating that converters.js is stored in the same folder as water-limits.js. 
When you use require(), the entire module.exports object is returned and stored in the variable converters. This 
means that both the .celsiusToFahrenheit() and .fahrenheitToCelsius() methods can be used in this program!
*/

const converters = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);