// Q.) Program to convert Celsius to Farhenheit

let celsius = parseInt(prompt("Please Enter the temperature in celsius"))

function convertCelsiusToFarhenheit(celsius){
    return (9/5 * celsius) + 32
}

let f = convertCelsiusToFarhenheit(celsius)
console.log(celsius +" degree temperature in farhenheit is: "+ f)
