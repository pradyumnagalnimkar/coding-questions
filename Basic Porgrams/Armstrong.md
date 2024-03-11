// Q.) Program to check Armstrong number
let number = parseInt(prompt("Enter a number"))

ans = 0
n = number
while(n > 0){
    digit = n % 10
    ans += digit * digit * digit
    n = parseInt(n / 10)
}

if(ans == number){
    console.log("Number enetered is a armstrong number")
}else{
    console.log("Number enetered is not a armstrong number")
}
