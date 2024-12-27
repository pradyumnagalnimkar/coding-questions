// Q.) Program to display multiplication table

let number = parseInt(prompt("Enter number"))

function displayTable(number){
    for(let i=1;i<=10;i++){
        console.log(`${number} X ${i} = ${number * i}`)
    }
}
displayTable(number)
