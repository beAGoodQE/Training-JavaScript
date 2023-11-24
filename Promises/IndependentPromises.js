/*
In our concurrent() function, both promises are constructed without using await. We then await each of their 
resolutions to print them to the console.
With our concurrent() function both promises’ asynchronous operations can be run simultaneously.  If possible,
we want to get started on each asynchronous operation as soon as possible! Within our async functions we
should still take advantage of concurrency, the ability to perform asynchronous actions at the same time.
*/

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./IndependentPromisesLib.js');

// Write your code below:
const serveDinner = async () => {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();

  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();