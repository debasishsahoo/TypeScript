"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Syntax
//condition ? expression1 : expression2;
//Where
//condition: is a boolean expression, which returns true false.
//expression1: executes if the condition is true.
//expression2: executes if the condition is false.
const isValid = true;
// Conditional operator
const message = isValid ? 'Valid' : 'Failed';
console.log('message:', message);
let a = 10;
let b = 15;
let c = a > b ? 'a is greater than b' : 'a is not greater than b';
console.log(c); //a is not greater than b
let d = 10;
let e = 15;
let f;
if (d > e) {
    f = 'd is greater than e';
}
else {
    f = 'd is not greater than e';
}
console.log(f); //a is not greater than b
//Multiple Conditions in Ternary Operator
function check1(a, b) {
    let c = a == b
        ? 'a is equal to b'
        : a > b
            ? 'a is greater than b'
            : 'b is greater than a';
    console.log(c);
}
check1(10, 10); //a is equal to b
//check1(11, 10); //a is greater than b
//check1(10, 11); //b is greater than a
function check2(a, b) {
    let c;
    if (a == b) {
        c = 'a is equal to b';
    }
    else if (a > b) {
        c = 'a is greater than b';
    }
    else {
        c = 'b is greater than a';
    }
    console.log(c);
}
check2(10, 10); //a is equal to b
check2(11, 10); //a is greater than b
check2(10, 11); //b is greater than a
