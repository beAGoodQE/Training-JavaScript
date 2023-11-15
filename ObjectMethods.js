// When the data stored on an object is a function we call that a method. 
// A property is what an object has, while a method is what an object does.

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreatMessage2 : 'retreat 2',
  retreat() {
    console.log(retreatMessage);
    console.log(this.retreatMessage2);  // Will throw an error if 'this.' is not added since it's decalared within object
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();