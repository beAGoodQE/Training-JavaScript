let eventTarget = document.getElementById('targetElement');

function eventHandlerFunction() {
    // this block of code will run when click event happens
  }

// eventTarget will listen for a click event then call eventHandlerFunction()
eventTarget.addEventListener('click', eventHandlerFunction);

/*
The .removeEventListener() method is used to reverse the .addEventListener() method. 
This method stops the event target from “listening” for an event to fire when it no longer needs to.
.removeEventListener() also takes two arguments - event type as String and Event Handler Function
*/
eventTarget.removeEventListener('click', eventHandlerFunction);

/* Event Object Properties
JavaScript stores events as Event objects with their related data and functionalities as properties and
methods. When an event is triggered, the event object can be passed as an argument to the event handler function.
*/
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = `${event.timeStamp}`;
}

share.onclick = sharePhoto;

/////////////////////// EVENT TYPES ///////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_Events
let button = document.getElementById('color-button');
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() 
                            + ',' + colorValue() 
                            + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor;
}

button.onclick = colorChange;
// Event Handler for scrolling the mouse wheel
mysteryButton.onwheel = colorChange;