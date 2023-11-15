const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if ('number' === typeof this._energyLevel) {
        return `My current energy level is ${this._energyLevel}`;
      }
      else {
        return `System malfunction: cannot retrieve energy level`;
      }
    }
  };
  
  console.log(robot.energyLevel);