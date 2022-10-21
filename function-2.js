function converttocelcius(fahrenheit) {
    let celcius=((fahrenheit-32)*5)/9;
    return celcius;
}
let tempone=converttocelcius(212);
console.log(tempone);

function add(a,b,c) {
    return a+b+c;
}
let num=add(12+45+5);
console.log(num)

function minus(x,y) {
    return x-y;
}
let subtract1=minus(345,212);
console.log(subtract1);

function getscoretext(name="jane",score=45) {
return `Name:${name}-score:${score}`;
}
let scoredata=getscoretext("juliet",67);
console.log(scoredata);


function myplace(town) {
return `i live in ${town}`;
}
let data1 = myplace("nairobi");
console.log(data1);
