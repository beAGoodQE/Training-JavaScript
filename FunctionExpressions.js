/* Another way to define a function is to use a function expression. To define a function inside an expression, 
we can use the function keyword. In a function expression, the function name is usually omitted. 
A function with no name is called an anonymous function. Unlike function declarations, 
function expressions are not hoisted so they cannot be called before they are defined.
*/

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else
        return false;
  }
  
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater('Tuesday'));