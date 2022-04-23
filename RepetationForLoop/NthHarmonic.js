let number =( Math.floor(Math.random() * 1000));
console.log("Enter the number : ");
console.log(number);

var hormonic = 0;
for(let i = 1; i <= number; i++)
 {
    hormonic = 1/i + hormonic;
    console.log("Harmonic number of " + i + " is : " + hormonic);
 }