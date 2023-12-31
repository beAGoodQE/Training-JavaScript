// Run program in Terminal with command `node Node/water-limits.js`

/* water-limits.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  const freezingPointC = 0;
  const boilingPointC = 100;
  
  const freezingPointF = celsiusToFahrenheit(freezingPointC);
  const boilingPointF = celsiusToFahrenheit(boilingPointC);
  
  console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
  console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);