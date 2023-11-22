/*
SetTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks
to be performed after a delay. setTimeout() has two parameters: a callback function and a delay in milliseconds.
This delay is performed asynchronously—the rest of our program won’t stop executing during the delay.
*/

const delayedHello = () => {
    console.log('Hi! This is an asynchronous greeting!');
  };
setTimeout(delayedHello, 2000); // Says "Hi..." after a 2 second delay

// Use setTimeout() to construct async Promises
const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(( ) => {resolve('I resolved!')}, 1000);
    });
  };
const prom = returnPromiseFunction();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log('Inside usingSTO()');
}
setTimeout(usingSTO, 3000); // Call usingSTO after 3 sec delay

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
// Prints:
// This is the first line of code in app.js.
// This is the last line of code in app.js.
// Inside usingSTO()