// Q.) Program to find largest element in an array
let number = parseInt(prompt("Enter array size"))
let numbers = []
for(let i=0;i<number;i++){
    let item = parseInt(prompt("Enter "+i+1+" array element"))
    numbers.push(item)
}
let maxi = numbers[0]
for(let num of numbers){
    if(maxi < num){
        maxi = num
    }
}
console.log(maxi)
