// Question: Write a program for transpose of a matrix

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
let transpose = [];
let temp;
const m = matrix.length;
const n = matrix[0].length;
for(let col=0;col<n;col++){
    temp = [];
    for(let row=0;row<m;row++){
        temp.push(matrix[row][col]);
    }
    transpose.push(temp);
}
console.log(transpose);