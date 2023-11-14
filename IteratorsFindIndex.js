const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal); // prints 7

const startsWithS = animals.findIndex(animal => {
  return animal.startsWith('s');
})
console.log(startsWithS); // prints 3