let number1 =( Math.floor(Math.random() * 100));
console.log("Enter Starting Number : ");
console.log(number1);
let number2 =( Math.floor(Math.random() * 100));
console.log("Enter Ending Number : ");
console.log(number2)
if (number1 >= 0 && number1 < number2) {
    for(let i = number1; i <= number2; i++) {
        let flag = 0;
    
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0){
            flag = 1;
            break;
        }    
    }
    if (flag == 0 && i != 1)
        console.log(i);
}
}
else
    console.log("Input Invalid..");