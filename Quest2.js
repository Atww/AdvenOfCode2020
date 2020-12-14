const fs = require('fs')

var array = fs.readFileSync('./Quest1_input.txt').toString().split("\n");
// console.log(typeof(array[0]))
const aimming = 2020;
for(let i = 0 ; i< array.length;i++){
    for(let j = i+1 ; j<array.length;j++){
        for(let k = j+1;k<array.length;k++){
            if(parseInt(array[i]) + parseInt(array[j]) + parseInt(array[k]) === aimming){
                console.log(array[i])
                console.log(array[j])
                console.log(array[k])
                console.log(+array[i]+ +array[j]+ +array[k])
                console.log(array[i]*array[j]*array[k])
            }
        }
        
    }
}

