
console.log(" 1]  Feet to Inch ");
console.log(" 2]  Feet to Meter");
console.log(" 3]  Inch to Feet");
console.log(" 4]  Meter to Feet");

let x = (Math.floor(Math.random() * 10) % 6);
console.log(x);

switch(x) {
    case 1:
        console.log( "enter foot value : " );
        foot = 10;
        feetToInch = (foot * 12);
        console.log(foot + "foot is equals to :" +feetToMeter +"inch");
        console.log(feetToInch);
        
   break;
    case 2:
        console.log( "enter feet value: " );
        feet = 10;
        feetToMeter = (feet / 3.28084);
        console.log(feet + "feet is equals to :" +feetToMeter +"meter");
        break;
    case 3:
        console.log( "enter inch value " );
        inch = 40;
        inchToFeet = (inch * 0.0833333);
        console.log(inch + "inch is equals to :" +inchTofeet +"feet");
        break;
    case 4:
        console.log( "enter meter value" );
        meter = 35;
        meterToFeet = (meter * 3.28084);
        console.log(meter + "meter is equals to :" +feetToMeter +"feet");
        break;
    default:
        console.log("Invalid Input");
        break;
    }
