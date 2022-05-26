"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
let y = 10;
x = (x++, y++, x + y);
//Comma Operator
console.log(x); //13
x = 1;
x = (2, 4, 5);
console.log(x); //5
let a = 100;
let b = 100;
console.log(addNum(a, b)); //200
//Using Comma to add expressions
console.log(addNum((a++, (a += b), a), (a++, b))); // 302
function addNum(a, b) {
    return a + b;
}
