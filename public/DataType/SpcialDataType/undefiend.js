"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Undefined is a primitive value that indicates that the value is not assigned. i.e. whenever we do not explicitly assign a value to a variable, TypeScript assigns the undefined value to it. It is an unintentional absence of any value.
//Uninitialized variable
let NumVar;
console.log(NumVar);
//Optional Function argument
function foo1(x) {
    console.log(x);
}
foo1();
function foo2(x) {
    console.log(x);
}
foo2();
//Non-existing array elements
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[3]);
//Explicitly set to undefined
let myVar = undefined;
console.log('myVar:', myVar);
//Undefined Type
let num;
console.log(num);
console.log(typeof num);
//Global Undefined variable
console.log(undefined);
console.log(typeof undefined);
console.log(globalThis.undefined);
console.log(typeof globalThis.undefined);
abc();
function abc() {
    var undefined = 10;
    console.log(undefined); //10
    console.log(typeof undefined); //number
}
//Checking for undefined
let a8;
console.log(a8 === undefined); //true
//Null & Undefined
let a9;
console.log(typeof a9);
console.log(typeof a9 === 'undefined');
let a10;
console.log('a10:', a10);
//loose equality check
console.log(a10 == false); //false
console.log(a10 == true); //false
//Strict equality check
console.log(a10 === false); //false
console.log(a10 === true);
let a11 = 10;
let b11;
console.log(a11 + b11); //NaN
console.log(Number(b11)); //NaN
