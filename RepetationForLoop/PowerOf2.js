let number =( Math.floor(Math.random() * 1000));
console.log("Enter a number: ");
console.log(number);

if (number >= 0 && Number.isInteger(number)) {
    for (let i = 0; i <= number; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} 
else
{
console.log("Enter only non-negative integers.");
}