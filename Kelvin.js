// Forecast today is 293 Kelvin
const kelvin = 0;

// Celcius is Kelvin - 273
const celsius = kelvin - 273;

// Fahrenheit formula
let fahrenheit = celsius * (9/5) + 32;

// Floor
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);