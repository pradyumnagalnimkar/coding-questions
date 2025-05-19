// Question: Write a program to multiply two matrices

const first = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const second = [
    [4,5,6],
    [7,8,9],
    [1,2,3]
]

let result = [];
let temp;
for(let i=0;i<first.length;i++){
    temp = [];
    for(let j=0;j<second.length;j++){
        temp.push(first[i][j] * second[i][j]);
    }
    result.push(temp);
}
console.log(result);