// Q.2) Program to perform addition and division operation

let number1 = parseInt(prompt("Enter First Number"))
let number2 = parseInt(prompt("Enter Second number"))

console.log("The addition of two numbers is:" + (number1 + number2))

if(number2 != 0){
    console.log("The division of two numbers is:" + (number1 / number2))
}else{
    console.error("Division by zero is not allowed")
}
