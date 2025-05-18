// Question: Reverse a given string

const value = "Pradyumna"

// One Way: Splitting string -> Array -> Read from end & update output
const reverseString = (input) => {
    let result = "";
    // Convert input string to character array
    const input_characters = input.split("")
    const input_len = input_characters.length;
    for(let i = input_len-1;i>=0;i--){
        result += input_characters[i];
    }
    return result;
}
console.log(`Using character array approach: ${reverseString(value)}`);


// Another Way: Two pointer approach(start, end) -> Swap start and end charcters till start & end index overlaps
const reverseUsingIndexes = (input) => {
    const words = input.split("");
    let start = 0;
    let end = words.length-1;
    while(start < end){
        let temp = "";
        temp = words[start];
        words[start] = words[end];
        words[end] = temp;
        start += 1;
        end -= 1;

    }
    return words.join("");
}
console.log(`Using two pointer reverse approach: ${reverseUsingIndexes(value)}`);

