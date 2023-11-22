/*
Promise objects come with an aptly named .then() method. It allows us to say, “I have a promise, 
when it settles, then here’s what I want to happen…”.

.then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks 
as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.
- 1st handler, 'onFulfilled', is a success handler, and it should contain the logic for the promise resolving.
- 2nd handler, 'onRejected', is a failure handler, and it should contain the logic for the promise rejecting.

.then() it always returns a promise!!!
*/

/////////////////////////////////  EXAMPLE 1  ///////////////////////////////////
let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
  
  const handleSuccess1 = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
  const handleFailure1 = (rejectionReason) => {
    console.log(rejectionReason);
  };
  
  prom.then(handleSuccess1, handleFailure1);


  /////////////////////////////////  EXAMPLE 2  ///////////////////////////////////
  const {checkInventory} = require('./Library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess2 = resolvedValue => {
  console.log(resolvedValue);
}

const handleFailure2 = rejectedValue => {
  console.log(rejectedValue);
}

checkInventory(order).then(handleSuccess2, handleFailure2);