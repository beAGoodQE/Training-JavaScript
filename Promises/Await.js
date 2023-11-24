/*
The await keyword can only be used inside an async function.
Await is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate
 amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.
*/

const brainstormDinner = require('./AwaitLibrary.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}
nativePromiseDinner();

// async/await version:
const announceDinner = async () => {
  // Write your code below:
  let resolvedValue = await brainstormDinner();
  console.log(`I'm going to make ${resolvedValue} for dinner.`);
}

announceDinner();

