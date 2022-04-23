// a.
let feet = 12; // 12 inches means 1 feet
let inch = 42;

let inchToFeet = inch / feet;
console.log("Unit Conversion of 42 inches is : " + inchToFeet);

// b.
let length = 60;
let width = 40;
let oneMeterInFeet = 3.28084;

console.log("Plot Length " + length + " Feet");
console.log("Plot width " + width + " Feet");

let areaInFeet = length * width;
console.log("Total Rectangular plot area in feet is : " + areaInFeet);

let areaInMeters = (areaInFeet / oneMeterInFeet);
console.log("Total Rectangular plot area in meters is : " + areaInMeters);

// c.
let acrearea = 25 * areaInMeters;
console.log("Area of 25 plots in meters is : " + acrearea);

// 1 acre = 4046.86 sq meters
let area = (acrearea / 4046.86);
console.log("Area of 25 plots in acers is : " + area);