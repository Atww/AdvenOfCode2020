// Can Miss
// cid
let answer = 0 ; 
const fs = require('fs')
var array = fs.readFileSync('./Quest4_input.txt').toString().split("\n");

// const line = array[4];
// const line2 = array[5];
// const line3 = array[6];
// let item = (line.split(" "))
// let item2 = (line2.split(" "))
// let item3 = (line3.split(" "))
// let combind = [...item,...item2,...item3]
var temp =[];

let arr =[]
for(let i = 0 ; i<array.length;i++){
    let line = array[i];
    if(line != ''){
        arr = [...arr,...line.split(" ")]
    }else{
        const caseValid = {
            byr:null,
            iyr:null,
            eyr:null,
            hgt:null,
            hcl:null,
            ecl:null,
            pid:null,
            cid:null, // optional
        }
        for(let i = 0 ; i < arr.length ; i++){
            const [str,val] = arr[i].split(":")
            caseValid[str] = val;
        }
        const {byr,iyr,eyr,hgt,hcl,ecl,pid,cid} = caseValid
        if(byr&&iyr&&eyr&&hgt&&hcl&&ecl&&pid){
            answer++;
        }else{
        // console.log(caseValid)
        temp.push(caseValid);

        }
        arr =[]

    }
}
fs.writeFileSync("./programming.txt", JSON.stringify(temp)); 

console.log('-------')
console.log(answer)
