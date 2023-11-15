/*
Objects are passed by reference. This means when we pass a variable assigned to an object into a function 
as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. 
As a result, functions which change object properties actually mutate the object permanently (even when the object 
is assigned to a const variable).
*/

const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
};
   
let paintIt = obj => {
    obj.color = 'glorious gold'
};

paintIt(spaceship); // call paintIt with spaceship passed in as the 'obj' parameter
console.log(spaceship.color); // Returns 'glorious gold'


let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};
  
// Write your code below
const greenEnergy = object => {
    object['Fuel Type'] = 'avocado oil';
}
  
const remotelyDisable = object => {
    object.disabled = true;
}
  
greenEnergy(spaceship2);
console.log(spaceship2['Fuel Type']); // Prints 'avocado oil'
remotelyDisable(spaceship2);
console.log(spaceship2);
// Prints { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }