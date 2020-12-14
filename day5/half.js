let maximum = 128;

function findRow(str){
    let max = 127
    let min = 0;
    for(let i = 0 ; i < 7;i++){
        if(str[i] == "F"){
            max = Math.floor(((min+max)/2))
        }else if(str[i] == "B"){
            min = Math.ceil((max+min)/2);
        }
    }
    if(max === min){
        return max;
    }else{
        console.log('----ERROR ROW----')
        console.log(max)
        console.log(min)
        console.log(str)
        console.log('-------------')
    }
}
function findColumn(str){
    let min = 0
    let max = 7
    for(let i =7;i<10;i++){
        if(str[i] == "L"){
            max = Math.floor(((min+max)/2))
        }else if(str[i] == "R"){
            min = Math.ceil(((max+min))/2);
        }
    }
    if(max === min){
        return max;
    }else{
        console.log('----ERROR COLUMN----')
        console.log(max)
        console.log(min)
        console.log(str)
        console.log('-------------')
    }
    
}
const fs = require('fs')
var array = fs.readFileSync('./input.txt').toString().split("\n");
let max = 0 ;
let tmep = [] 
for(let i = 0 ; i <array.length;i++){
    const item = array[i];
    const str = item.split("")
    const row = findRow(str);
    const column = findColumn(str);
    let ans =(row * 8 +column)

    console.log(` Row = ${row} , Column = ${column} , Seat = ${ans}`)
    tmep.push(ans);
    if(parseInt(ans) > parseInt(max)){
        max = ans
    }
}
tmep.sort(function(a, b) {
    return a - b;
  });
for(let i = 0; i < tmep.length -1 ;i++){
    if(tmep[i]+1 !== tmep[i+1]){
        console.log(tmep[i])
        console.log(tmep[i+1])
        break;
    }
}
