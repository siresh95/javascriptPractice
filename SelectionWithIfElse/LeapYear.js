
console.log("\nEnter a 4-digt year to check if Leap Year or not:");
const year = 2000;
console.log(2000);
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) console.log("It's a leap year.");
    else console.log("It's a non-leap year.");
}
else console.log("User-input is not a 4-digit year.");