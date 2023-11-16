let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 
'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage);
console.log(secretMessage.length);  // Prints 24

secretMessage.pop();

console.log(secretMessage);         // Removes 'Javascript'
console.log(secretMessage.length);  // Prints 23

secretMessage.push('to');
secretMessage.push('Program');
console.log(secretMessage);         // 'to' and 'Program' are appended

secretMessage[7] = 'right';         // 'easily' updated to 'right'
console.log(secretMessage); 

secretMessage.shift();
console.log(secretMessage);         // 'Learning' is removed from array

secretMessage.unshift('Programming');
console.log(secretMessage);         // 'Programming' is added in [0]

secretMessage.splice(6, 5, 'know');
console.log(secretMessage);         // Replaces 'get', 'right', 'the', 'first', 'time'

console.log(secretMessage.join(' '));  // Prints Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program