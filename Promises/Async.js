/*
The async keyword is used to write functions that handle asynchronous actions.
We wrap our asynchronous logic inside a function prepended with the async keyword.
Async functions always return a promise. This means we can use traditional promise syntax, like .then() 
and .catch with our async functions.  Returns 3 options:
- If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
- If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
- If a promise is returned from the function, it will simply return that promise
*/

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  }
  
withConstructor(0)
    .then((resolveValue) => {
    console.log(`withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});
  
// Write your code below:
const withAsync = async (num2) => {
    if (num2 === 0){
        return 'zero';
    } else {
        return 'not zero';
    }
}
  // Leave this commented out until step 3:
  
withAsync(100)
    .then((resolveValue) => {
    console.log(`withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})