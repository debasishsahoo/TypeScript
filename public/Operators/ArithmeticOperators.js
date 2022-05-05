"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//"+" (Addition)
var a = 12;
var b = 2;
var c = a + b;
console.log(c); //14
var a1 = 'Hello';
var b1 = 2;
var c1 = a1 + b1;
console.log(c1); //Hello2
var a2 = '12';
var b2 = 2;
var c2 = a2 + b2; //string concatenation as the b is string
console.log(c2); //122
var a3 = true; //boolean
var b3 = 2;
var c3 = b3 + a3; //Typescript compiler throws a warning here
console.log(c3); //3 because true is 1
var a4 = false; //boolean
var b4 = 2;
var c4 = b4 + a4; //Compiler warning
console.log(c4); //2
console.log(true + true + true);
//"–" (Subtraction)
var a5 = 10;
var b5 = 2;
var c5 = a - b;
console.log(c5); //8
var d = b - a;
console.log(d); //-8
//Boolean
//Compiler warning
console.log(true - false); //1  true is 1, false is 0
console.log(2 - true); //1
var a6 = '1';
var b6 = '2';
console.log(a6 - b6); //-1
var a7 = 'Hello';
var b7 = 2;
console.log(a7 - b7); //NaN
//"*"(Multiplication)
var a8 = 5;
var b8 = 2;
console.log(a8 * b8); //10
var a9 = '5';
var b9 = '2';
console.log(a9 * b9); //10
console.log(Infinity * 0); // NaN
console.log(Infinity * Infinity); // Infinity
console.log('Hello' * 10);
// "/" (Division)
console.log(10 / 2); //5
console.log(11 / 2); //5.5
console.log(6 / '3'); //2
console.log('6' / '3'); //2
console.log(6 / 'a'); //NaN
console.log(6 / '3a'); //NaN
console.log(6 / true); //6 true is 1
console.log(2 / false); //Infinity false is 0
console.log(2 / 0); //Infinity
//% (modulus or Reminder)
console.log(12 % 5); //2
console.log(-12 % 5); //-2
console.log(-12 % -5); //-2
console.log(12 % -5); //2
