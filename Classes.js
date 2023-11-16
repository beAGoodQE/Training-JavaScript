/*
Although you may see similarities between class and object syntax, there is one important 
method that sets them apart. It’s called the constructor method. JavaScript calls the 
constructor() method every time it creates a new instance of a class.
*/

class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
//Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
  }

// Instances
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// Method calls
console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);