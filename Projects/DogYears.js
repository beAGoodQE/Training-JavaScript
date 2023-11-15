// My Age
const myAge = 3;

// Early Years
let earlyYears = 2;

earlyYears *= 10.5;

// Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4
laterYears *= 4;

console.log(`earlyYears: ${earlyYears}, laterYears: ${laterYears}`);

// myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string, call its built-in method .toLowerCase(),
const myName = 'Brian'.toLowerCase();

// final
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);