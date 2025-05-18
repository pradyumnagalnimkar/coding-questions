// Q.) Program to print prime numbers in a interval

let start = parseInt(prompt("Enter start of interval"))
let end = parseInt(prompt("Enter end of interval"))

function checkPrime(number){
    let isPrime = true
    for(let i = 2; i <= number ** 0.5 ;i++){
        if(number % i == 0){
            isPrime = false
            break
        }
    }
    return isPrime
}

let primes = []
for(let i = start; i< end;i++){
    if(checkPrime(i)){
        primes.push(i)
    }
}
console.log(primes)
