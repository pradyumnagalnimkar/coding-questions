// Q.) Program to find factorial of a number

let number = parseInt(prompt("Find factorial of a number"))

function findFactorial(number){
    if (number == 0 || number == 1){
        return 1
    }
    return number * findFactorial(number - 1)
}

console.log("Factorial of the number is : " +findFactorial(number))
