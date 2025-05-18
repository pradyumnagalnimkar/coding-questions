// Question: Write a program to validate if given string is pallindrome or not

const first = "aabbccccbbaa";
const second = "abcabc";

// One Way: Using Two pointer approach
const checkPallindrome = (value) => {
    let start = 0;
    let end = value.length - 1;
    while(start < end){
        if(!value.charAt(start) === value.charAt(end)){
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
}
checkPallindrome(first) ? console.log(`${first} is a valid pallindrome`) : console.log(`${first} is not a valid pallindrome`);
checkPallindrome(second) ? console.log(`${second} is a valid pallindrome`) : console.log(`${second} is not a valid pallindrome`);

// Second Way: Check equality with reverse of input
const checkPallindromeReverse = (value) => {
    const reversedValue = value.split("").reverse().join("")
    if(reversedValue !== value){
        return false;
    }
    return true;
}
checkPallindrome(first) ? console.log(`${first} is a valid pallindrome`) : console.log(`${first} is not a valid pallindrome`);
checkPallindrome(second) ? console.log(`${second} is a valid pallindrome`) : console.log(`${second} is not a valid pallindrome`);