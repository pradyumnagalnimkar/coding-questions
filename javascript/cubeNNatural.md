// Q.) Program to cube sum n natural numbers
let number = parseInt(prompt("Enter a number"))

let ans = 0
for(let i=1;i<=number;i++){
    ans += i * i * i
}
console.log(ans)
