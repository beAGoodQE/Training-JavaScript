/* Arrow functions remove the need to type out the keyword 'function' every time you need to create a function. 
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function 
body surrounded in { }

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
*/

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
 // 1 Param doesn't need parentheses, but 0 or multiple params do!
 const functionParams0 = () => {};
 const functionParams1 = day => {};
 const functionParamsMulti = (day, week) => {};

// Implicit return, function body with just 1 line of code doesn't need {}
const sumNumbers = number => number + number;
// vs 2 or more lines
const sumNumbers2 = number => {
    const sum = number + number;
    return sum;
}

// No return needed, this is called 'implicit return'
/*
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
*/

// Concise body syntax (with one parameter) does not use parentheses, curly braces, or the return keyword.
const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;
