// 1-3 a means that the password must contain a at least 1 time and at most 3 times

let answer = 0 ; 
const fs = require('fs')

var array = fs.readFileSync('./Quest2_input.txt').toString().split("\n");
for(let i = 0 ; i < array.length;i++){

    let [input,text] = array[i].split(":")
    let [number,focus] = input.split(" ")
    let [min,max] = number.split("-")
    let txtAn = text.trim().split('').filter((item)=> item === focus).length;

    if(txtAn <= max && txtAn >= min){
        // console.log(`Text = ${text} : Focus = ${focus} : Min = ${min} : Max = ${max} : TxtAn = ${txtAn}`)
        answer++;
    }
    // console.log(text)
    // console.log(focus)
    // console.log(min)
    // console.log(max)
    // console.log(txtAn)

}
console.log(answer)
