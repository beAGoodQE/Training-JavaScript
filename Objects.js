// Write your fasterShip object literal below

let fasterShip = {
    'Fuel Type' : 'Turbo Fuel',
    color : 'silver',
    homePlanet : 'Earth'
}

// Use "./dot notation" to access object's properties
let hue = fasterShip.color;
console.log('hue: ' + hue);

// Use "bracket notation" to access keys that have numbers, spaces or special chars
let fuel = fasterShip["Fuel Type"];  // Returns Turbo Fuel
console.log('fuel: ' + fuel);

// Use variables inside bracket notation
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(fasterShip, 'homePlanet'); // Returns 'Earth'
// OR
let gas = 'Fuel Type';
console.log(fasterShip[gas]); // Prints Turbo Fuel