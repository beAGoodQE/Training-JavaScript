// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
const increaseWidth = () => {
  itemOne.style.width = '404px';
}

const changeBackground = () => {
  itemTwo.style.backgroundColor = 'green';
}

const changeText = () => {
  itemThree.innerHTML = 'The mouse has left the element';
}

const showItem = () => {
  itemFour.style.display = 'block';
}

itemOne.onmouseover = increaseWidth;
itemTwo.onmouseup = changeBackground;
itemThree.onmouseout = changeText;
itemFour.onmousedown = showItem;
