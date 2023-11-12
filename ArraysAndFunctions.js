// Arrays "pass-by-reference", passing to function the reference to var memory is stored
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept); // prints ['arrays', 'can', 'be', 'MUTATED']

const removeElement = newArr => newArr.pop();
removeElement(concept);
console.log(concept);  //prints ['arrays', 'can', 'be']