/*
Promises are objects that represent the eventual outcome of an asynchronous operation.
A Promise object can be in one of three states:
Pending
Fulfilled
Rejected
*/

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    }
    else {
      reject('That item is sold out.');
    }
  }
  
  const orderSunglasses = () => {
    return new Promise(myExecutor);
  }
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);