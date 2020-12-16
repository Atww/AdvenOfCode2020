const fs = require('fs')
var array = fs.readFileSync('./input.txt').toString().split("\n");
let arr = []
let cntPerson = 0 ; 
let answer = 0;
for(let i = 0 ; i <array.length;i++){
    let line = array[i];
    if(line != ''){
        cntPerson++;
        arr = [...arr,...line.split("")]
    }else{
        const unique = [...new Set(arr)];
        arr =[]
        cntPerson=0;
        answer += unique.length;
    }
}
console.log(answer)
