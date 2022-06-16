"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function Hoisting
//calling function
abc(15);
//Declar Function
function abc(x) {
    console.log(x);
}
abc(10);
//function is a first-Class-Citizion in javascript
function fcz(a, b) {
    return a + b;
}
let x = fcz;
console.log('x:', x(5, 8));
