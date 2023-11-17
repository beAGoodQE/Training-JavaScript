/*  app-shapes.js

*/
const radius = 5;
const sideLength = 10;

// Method 1 - Store entire 'module.exports' as 'areaFunctions' variable
const  areaFunctions = require('./shape-area.js');

const areaOfCircle = areaFunctions.circleArea(radius);
console.log(`Area of circle with radius ${radius} = ${areaOfCircle}`);

// Method 2 - Or can use 'Object Destructuring' to extract as separate methods
const {circleArea, squareArea} = require('./shape-area.js');

const areaOfCircle2 = circleArea(radius);
const areaOfSquare2 = squareArea(sideLength);

console.log(`Area of circle with radius ${radius} = ${areaOfCircle2}`);
console.log(`Area of square with length ${sideLength} = ${areaOfSquare2}`);
