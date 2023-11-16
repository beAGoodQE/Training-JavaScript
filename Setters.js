// Getters and setters are special methods that are accessed like properties, and you don't invoke them with 
// parentheses as you would with regular methods.
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if ('number' === typeof num && num >= 0) {
        this._numOfSensors = num;
      }
      else {
        console.log(`Pass in a number that is greater than or equal to 0`);
      }
    }
  };

console.log(robot.numOfSensors);  // Prints 15

robot.numOfSensors = 100;
console.log(robot.numOfSensors);  // Prints 100