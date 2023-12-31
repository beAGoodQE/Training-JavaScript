/*
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal.charAt(0);
})
console.log(secretMessage.join('')); // Prints 'HelloWorld'


const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNum => {
  return bigNum / 100;
})
console.log(smallNumbers); // Prints 1, 2, 3, 4, 5