/*

*/

const cookBeanSouffle = require('./AsyncCatchLibrary.js');

// Write your code below:
const hostDinnerParty = async () => {
  try {
    let resolvedValue = await cookBeanSouffle();
    console.log(`${resolvedValue} is served!`);
  } catch (error) {
    console.log(error);
    console.log(`Ordering a pizza!`);
  }
}

hostDinnerParty();
