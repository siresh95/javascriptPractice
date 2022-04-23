console.log("Enter integer: ");
let n =( Math.floor(Math.random() * 10));
console.log(n);
if (n >= 0 && Number.isInteger(n)) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    console.log("factorial of "   +n +    "is"  + factorial);
} else {
console.log("Invalid user input.");
}