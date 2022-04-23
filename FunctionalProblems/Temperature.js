var prompt = require('prompt-sync')();

var C = prompt("Enter celsius between 0°C and 100°C : ");
var F = prompt("Enter celsius between 32°F and 212°F : ");

let degF = (C * 9/5) + 32;
let degC = (F - 32) * 5/9;
let a = degF;
let b = degC;

switch(true) {
    case a: 
        console.log("celsius to fahreneheit is : " + degF);
        break;
    case b:
        console.log("fahreneheit to celsius is : " + degC);
        break;
        
}