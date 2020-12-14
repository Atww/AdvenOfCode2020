let answer = 0 ; 
const fs = require('fs')

var array = fs.readFileSync('./Quest2_input.txt').toString().split("\n");
for(let i = 0 ; i < array.length;i++){

    let [input,text] = array[i].split(":")
    let [number,focus] = input.split(" ")
    let [min,max] = number.split("-")
    let txtAn = text.trim().split('');

    let firstChar = txtAn[min-1]
    let secondChar = txtAn[max-1];

    // if(txtAn <= max && txtAn >= min){
    //     // console.log(`Text = ${text} : Focus = ${focus} : Min = ${min} : Max = ${max} : TxtAn = ${txtAn}`)
    //     answer++;
    // }
    // console.log(text)
    // console.log(focus)
    // console.log(min)
    // console.log(max)
    // console.log(txtAn)
    // console.log(firstChar)
    // console.log(secondChar)
    if(firstChar !== secondChar){
        if(firstChar === focus){
            answer++
        }else if(secondChar === focus){
            answer++
        }
    }

}
console.log(answer)
