let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// showInfo is the Event Handler Function
const showInfo = () => {
  moreInfo.style.display = 'block';
}

// readMore is the Event target
// showInfo is the Event Handler Function
readMore.addEventListener('click', showInfo); // for .addEventListener, we can add multiple event handler functions!!!

// addEventListener is 1 way to register event handlers, can also be registered
// with ".onevent" property on a DOM element (target).  So can also be done as:
readMore.onclick = showInfo; // for '.onevent', we can ONLY add 1 event handler functions!!!
