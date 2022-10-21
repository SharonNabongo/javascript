function num() {
    var data1=55;   
console.log(data1);
}
console.log(num());



function gradecalc(score,totalscore) {
    let percent=(score/totalscore)*100;
    const lettergrade="";
    if (percent>=80) {
        lettergrade="A";
}else if (percent>=60) {
    lettergrade="B";
}else if (percent>=40) {
 lettergrade="C";
}else if (percent>=20) {
    lettergrade="D";   
}else{
    lettergrade="E";
}
return`you got grade$(lettergrade)which is ${percent}%`;
}

let scorenum1=gradecalc(11,20);
console.log(scorenum1);








