/*
We can chain .then(), 1st for Resolve, 2nd for Reject.  Or use .catch()!!!

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, 
this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes 
the same thing as using a .then() with only a failure handler.
*/

// Rewrite 'Then.js' to use .catch()
const {checkInventory} = require('./Library.js');

const order = [['sunglasses', 11111], ['bags', 2]]; // Fails because too many sunglasses were ordered.

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);