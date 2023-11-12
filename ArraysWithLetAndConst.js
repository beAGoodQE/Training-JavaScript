let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);  // prints [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo'];
console.log(condiments);  // prints ['Mayo']

utensils[3] = 'Spoon';
console.log(utensils);  // prints ['Fork', 'Knife', 'Chopsticks', 'Spoon']
utensils = 'Spoon';
console.log(utensils);  // TypeError!