// Question: Write a program to check words that ends with & starts with specific character

let sentence = "Programming with Mosh";


// Positive Case
let startingcharacter = "Programming";
let endingcharacter = "Mosh";
console.log(`Given Sentence starts with ${startingcharacter}?: ${sentence.startsWith(startingcharacter) ? "Yes" : "No"}`);
console.log(`Given Sentence ends with ${endingcharacter}?: ${sentence.endsWith(endingcharacter) ? "Yes" : "No"}`);

// Negative Case
startingcharacter = "Mosh";
endingcharacter = "Programming";
console.log(`Given Sentence starts with ${startingcharacter}?: ${sentence.startsWith(startingcharacter) ? "Yes" : "No"}`);
console.log(`Given Sentence ends with ${endingcharacter}?: ${sentence.endsWith(endingcharacter) ? "Yes" : "No"}`);

// Posiitve Case check with a single character
startingcharacter = "p";
endingcharacter = "h";
console.log(`Given Sentence starts with ${startingcharacter}?: ${sentence.startsWith(startingcharacter) ? "Yes" : "No"}`);
console.log(`Given Sentence ends with ${endingcharacter}?: ${sentence.endsWith(endingcharacter) ? "Yes" : "No"}`);
