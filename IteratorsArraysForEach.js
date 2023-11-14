// forEach(), doesn't have a Return value, so it returns None/Undefined 
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below using Arrow Functions
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

/* Could also use code without Arrow Functions
function printFruit(fruit){
  console.log(fruit);
}
fruits.forEach(printFruit);
*/

/* Prints:
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
*/