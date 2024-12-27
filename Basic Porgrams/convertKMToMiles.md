// Q.) Program to convert kilometers to miles

let km = parseInt(prompt("Please Enter the distance in kilometeres"))

const conversionFactor = 0.621371

function convertKmToMiles(km){
    return conversionFactor * km
}

let miles = convertKmToMiles(km)
console.log(km +" distance in miles is: "+ miles)
