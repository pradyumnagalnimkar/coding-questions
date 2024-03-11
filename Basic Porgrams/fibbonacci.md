// Q.) Program to print fibbonacci sequence
let first = 0;
let second = 1;

let n = parseInt(prompt("Enter a number"))

series = [first, second]
let third;
for(let i=2; i<n; i++){
    third = first + second
    first = second
    second = third
    series.push(third)
}
console.log(series
