// Global variables are declared outside of blocks, accessed by any program code

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

// Single code line has implicit return
const callMyNightSky = () => 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

console.log(callMyNightSky());


///////////////////////// Block Scope /////////////////////////
// Block scope aka "local variables" only available to code in the same block
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }

  logVisibleLightWaves();
  console.log(logVisibleLightWaves());
  console.log(lightWaves);

  // prints:    Moonlight
  //            Moonlight
  //            undefined
  //            ReferenceError


  /////////////////////////  Scope Pollution  //////////////////
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100, global var 'num' was reassiged in logNum()