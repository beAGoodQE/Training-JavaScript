/*
Functions can accept other functions as parameters. A higher-order function is a function that either 
accepts functions as parameters, returns a function, or both! We call functions that get passed in as
 parameters callback functions. Callback functions get invoked during the execution of the higher-order function.
*/

// callback function
const addTwo = num => {
    return num + 2;
  }
  
  // higher-order function
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
  
    if (checkA === checkB) {
      return func(val);
    }
    else
      return 'inconsistent results';
  }
  
  // callback function is passed in without parentheses
  console.log(checkConsistentOutput(addTwo, 4));