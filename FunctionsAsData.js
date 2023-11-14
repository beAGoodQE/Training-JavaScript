//In JavaScript, functions are first class objects. This means that, 
//like other objects you’ve encountered, JavaScript functions can have properties and methods.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  isTwoPlusTwo();
  console.log(isTwoPlusTwo.name);