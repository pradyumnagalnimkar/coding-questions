// Question: Write a program to compare strings in javascript



// One Way: Use localeCompare() method
/**
 * localCompare method: first.localeCompare(second)
 * @returns 
 * 1 if first is greater than second, ex: "hello" > "world" since "h" comes before "w"
 * -1 if first is smaller than second, ex: "banana" < "back" since "ban" in banana comes before "bac" in back
 * 0 if first is equal to second, ex: "fcc" is equal to "fcc" but not to "Fcc"
 * Note: Rely on < 0 and > 0 conditions instead of -1 or 1 values 
 */
// Return 1 example
let first = "hello";
let second = "world";
console.log(`Return 1 value example: ${first.localeCompare(second)}`);

// Return -1 example 
first = "banana";
second = "back";
console.log(`Return -1 value example: ${first.localeCompare(second)}`);

// Return 0 example
first = "fcc";
second = "fcc";
console.log(`Return 0 value example: ${first.localeCompare(second)}`);

// Another Way: Mathematical operators

// '>' operator example
first = "hello";
second = "world";
console.log(`Greater than operator example: ${first > second}`);

// '<' operator example 
first = "banana";
second = "back";
console.log(`Less than operator example: ${first < second}`);

// '===' operator example
first = "fcc";
second = "fcc";
console.log(`Equal to operator example: ${first === second}`);

