// Q.) Program to check if number is positive, negative or zero

let number = parseInt(prompt("Enter number to check if it's positive, negative or zero"))

function checkNumber(number){
    if(number > 0){
        return "Entered Number is positive."
    }else if (number < 0){
        return "Entered number is negative"
    }else{
        return "Entered number is zero"
    }
}

console.log(checkNumber(number))
