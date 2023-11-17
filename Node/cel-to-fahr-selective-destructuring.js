/*  cel-to-fahr-selective-destructuring.js
In many cases, modules will export a large number of functions but only one or two of them are needed. 
You can use object destructuring to extract only the needed functions.
Only use `.celsiusToFahrenheit()` method, leave `.fahrenheitToCelsius()` behind
*/

const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);