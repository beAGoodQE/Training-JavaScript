/*
Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT
the calling object. In the code snippet above, the value of this is the global object, or an object that exists 
in the global scope, which doesn’t have a dietType property and therefore returns undefined.
The key takeaway from the example above is to avoid using arrow functions when using this in a method!
*/

//  Wrong way with Arrow Function is "undefined"
const robot = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy ${this.energyLevel}%.`)
    }
  }
robot.checkEnergy(); // Prints "Energy undefined%"


// Right way with Function Expression.
const robot2 = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}
robot2.checkEnergy();  // Prints "Energy is currently at 100%."