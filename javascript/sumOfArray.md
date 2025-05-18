// Q.) Program to find sum of an array
let number = parseInt(prompt("Enter a number"))
let numbers = []
for(let i=0;i<number;i++){
    let item = parseInt(prompt("Enter "+i+" array element"))
    numbers.push(item)
}

let sum = 0
for(let num of numbers){
    sum += num
}

console.log(sum)
