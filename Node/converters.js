/* converters.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  
  // 1st approach - exporting already defined function
  module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
  
  // An alternative approach for exporting a function from a module is shown. In this second case,
  // a new function expression is declared and assigned to module.exports.fahrenheitToCelsius. 
  // This new method is designed to convert Fahrenheit values back to Celsius.\
  module.exports.fahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  };
  