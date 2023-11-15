/*
That’s because inside the scope of the .diet() method, we don’t automatically 
have access to other properties of the goat object.
The this keyword references the calling object which provides access to the calling object’s properties. 
In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and 
then the dietType property of goat by using property dot notation.
*/

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType);
    }
};
goat.diet();  // Output will be "ReferenceError: dietType is not defined"

const goat2 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
};
goat2.diet();  // Output: herbivore


const robot = {
    model : '1E78V2',
    energyLevel : 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  
  console.log(robot.provideInfo());