// Q.) Program to swap variable values

let first = parseInt(prompt("Enter first number"))
let second = parseInt(prompt("Enter second number"))

console.log("Before swap values: "+ first +", "+second)

let temp = first
first = second
second = temp

console.log("After swap values: "+ first +", "+second)
