let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');  // Separates String into an Array of Chars

let count = 0;
// OLD way to get count
//storyWords.forEach((word) => {
//    count ++;
//});

// NEW way
count = storyWords.length;
console.log('Count words: ' + count);  // 181 words

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

storyWords = storyWords.filter(word => word != unnecessaryWord);
// Same as
// storyWords = storyWords.filter(word => {
//    return word != unnecessaryWord});
console.log(storyWords); // 'literally' removed from story.

storyWords = storyWords.map(word => {
    if (word === misspelledWord) {
        return 'beautiful';
    }
    else {
        return word;
    }
});
console.log(storyWords); // 'beautifull' typo fixed

const badWordIndex = storyWords.findIndex(word => {
    return badWord === word;
});
console.log(badWordIndex); // Prints 78

storyWords[badWordIndex] = 'really'; // Updates 'freaking' to 'really'
console.log(storyWords);

let lengthCheck = storyWords.every(word => word.length <= 10);
console.log(lengthCheck);
//console.log(storyWords.join(' '));
storyWords = storyWords.map(word => {
    if (word.length > 10 ) {
        return 'stunning'; 
    }
    else {
        return word;
    }
});
lengthCheck = storyWords.every(word => word.length <= 10);
console.log(lengthCheck);
console.log(storyWords.join(' '));  // Puts Arrays back into a single string