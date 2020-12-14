let answer = 0 ; 
const fs = require('fs')
var array = fs.readFileSync('./Quest3_input.txt').toString().split("\n");
const right = 3;
const down =1 ;
const lng = array[0].length;

let move = 0
for(let i = 0 ; i<array.length;i++){
    let line = array[i].trim();
    // if(move >lng){
    //     move = move-lng
    //     if(line[move] =="#"){
    //         answer++;
    //         line[move] = "X"
    //     }else{
    //         line[move] = "O"

    //     }
    // }else{
    //     if(line[move] =="#"){
    //         answer++;
    //         line[move] = "X"
    //     }else{
    //         line[move] = "O"
    //     }
    // }
    // move+=3
    // console.log(line.join(''))
}
console.log('-------')
console.log(answer)
