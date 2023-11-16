/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
There are a few simple rules for translating text to whale language:
- There are no consonants. Only vowels excluding “y”.
- The u‘s and e‘s are extra long, so we must double them in our program.
*/

const input = 'turpentine and turtles';
console.log(input);

const vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    console.log(input[i]);  // Or can use console.log(input.charAt(i));
    if ('e' === input[i]) {
        resultArray.push(input[i]);
    }
    if ('u' === input[i]) {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        console.log('j is ' + j);
        if (vowels[j] === input[i]) {
            console.log('Match : ' + j);
            resultArray.push(input.charAt(i));
        }
    }
}

console.log('Results: ' + resultArray);

const resultString = resultArray.join('').toUpperCase();
console.log('resultString: ' + resultString);