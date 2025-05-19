// Question: Write a program to add two matrices

const first = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const second = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

let result = [];
for(let i=0;i<first.length;i++){
    let temp = [];
    for(let j=0;j<second.length;j++){
        temp.push(first[i][j] + second[i][j]);
    }
    result.push(temp);
}
console.log(result);