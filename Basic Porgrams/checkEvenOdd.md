// Q.) Program to check if number is odd or even

let number = parseInt(prompt("Enter number to check if it's odd or even"))

function checkOddEven(number){
    if(number & 1){
        return "Eneterd number is odd"
    }else{
        return "Eneterd number is even"
    }
}

console.log(checkOddEven(number))
