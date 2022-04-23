min=1000;
max=99;

for( i =1; i<=5; i++) {

    n = Math.floor(Math.random() * 900 + 100);
    console.log(n);
    if(max < n) {
        max = n;
    }
    if(min > n) {
        min = n;
    }
}
console.log("min number :" +min);
console.log("max number :" +max);