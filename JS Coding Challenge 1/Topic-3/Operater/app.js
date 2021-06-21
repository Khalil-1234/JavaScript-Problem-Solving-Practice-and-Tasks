// What will be the output of following:

var x = 5, y = 10, z = 15;
console.log(x + y);

console.log(y - x); 
console.log(y * x); 
console.log(y / x); 
console.log(y % x); 
console.log( x++); 
console.log( x--); 

// What will be the output of following:

var a = 5, b = 10, c = "5";
console.log(a);
console.log(a==c);
console.log(a===c);
console.log(a==x);
console.log(a !=b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a <= c);
console.log(a >= b);

// Write a program that uses logical and assignment operators.

let num1= 12;
let num2=10;
if (num1 >= num2 && num2 <= num1) {
    console.log("True");
} else {
    console.log("False");
    
}
// . Write a program that converts degree to fahrenheit and fahrenheit to degrees.

//F = ( 1.8 * C) + 32

// Where,
// F = Temperature in Fahrenheit
// C = Temperature in degree Celsius
// We can simply convert temperature using the above formula.




function checkTemperature() {
    const fv=document.getElementById("fd").value;
     
    // F = ( 1.8 * C) + 32
let newcv= (fv - 32) * 5/9
console.log(newcv);

}

// Write a program that takes two variables and prints the sum of it.
let number1=4;
let number2=5;
console.log(number1 + number2);