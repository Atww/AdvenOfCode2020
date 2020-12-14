// Can Miss
// cid

const byrRules = (byr) => (byr && ((byr.length === 4) && (parseInt(byr) >=1920 && parseInt(byr) <= 2002)))
const iyrRules = (iyr) => (iyr && ((iyr.length === 4) && (parseInt(iyr) >=2010 && parseInt(iyr) <= 2020)))
const eyrRules = (eyr) => (eyr && ((eyr.length === 4) && (parseInt(eyr) >=2020 && parseInt(eyr) <= 2030)))
const hgtRulres =(hgt) =>{
    if(hgt){
        if(hgt.includes("cm")){
            let num = parseInt(hgt.replace("cm",''))
            return num>= 150 && num <=193
        }else if(hgt.includes("in")){
            let num = parseInt(hgt.replace("in",''))
            return num>= 59 && num <=76
        }else{
            return false
        }
    }else{
        return false
    }
}
const hclRules = (hcl) =>{
    let txt = hcl.split("");
    const accept = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
    if(hcl.length ===7){
        if(txt[0] === "#"){
            let Accept = true;
            for(let i = 1; i < txt.length ; i++){
                if(!accept.includes(txt[i])){
                    Accept= false
                    break;
                }
            }
            return Accept;
        }else{
            return false;
        }
    }else{
        return false
    }
    


}
const eclRules = (ecl)=> {
    const AcceptAnswer = ['amb', 'blu' ,'brn' ,'gry' ,'grn', 'hzl' ,'oth']
    return AcceptAnswer.includes(ecl);
}
const pidRules = (pid)=>{
    if(pid.length === 9){
        return !isNaN(pid);
    }else{
        return false;
    }
}
let answer = 0 ; 
const fs = require('fs')
var array = fs.readFileSync('./Quest4_input.txt').toString().split("\n");
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
            if(byrRules(byr)&&iyrRules(iyr)&&eyrRules(eyr)&&hgtRulres(hgt)&&hclRules(hcl)&&eclRules(ecl)&&pidRules(pid)){
                answer++;
            }
        }
        
        arr =[]

    }
}
console.log('-------')
console.log(answer)



