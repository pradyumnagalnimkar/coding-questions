// Q.) Program to generate a random number from 0 to 100

function generateRandom(maxRange){
    return Math.floor(Math.random() * maxRange)
}

let randomNumber = generateRandom(100)
console.log("Random number generated is: " + randomNumber)
