"use strict";
//The Typescript has two operators for checking equality. One is == (equality operator or loose equality operator) and the other one is === (strict equality operator). Both of these operators check the value of operands for equality. But, the difference between == & === is that the == does a type conversion before checking for equality. Similarly, we have two, not equal operators != and !==
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
let b = 10;
console.log(a == b); //true
console.log(a === b); //true
//Difference between == & ===
//If types are same then there is no difference between == & ===
//If types are different then
// == does a type conversion. It will attempt to convert them to a string, number, or boolean. before doing the comparison.
// === returns false.
//Equality Operator ==
let c = 10;
let d = '10';
console.log(c == d);
let e = '01';
let f = 1;
console.log(e == f);
//Strict Equality Operator ===
console.log(c === d);
console.log(e === f);
//Notes on Equality check
//NaN is not equal to anything including itself.
console.log(NaN == NaN); //false
console.log(-0 == 0); //true
//null equals both null and undefined.
console.log(null == null); //true
console.log(null == undefined); //true
console.log(undefined == undefined); //true
console.log(Infinity == Infinity); //true
//!= and !== Not Equal
// != Operator
let x = 10;
let y = 10;
console.log(x != y); //false
console.log(x !== y); //false
// !== Operator
let x1 = 10;
let y1 = '10';
console.log(x1 != y1); //false
console.log(x1 !== y1); //true
//Equality check on Reference Types
let a1 = [10, 20];
let b1 = [10, 20];
console.log(a1 == b1); //false
console.log(a1 === b1); //false
let c1 = a1;
//same object
console.log(a1 === c1); //true
console.log(a1 == c1); //true
//== Vs ===. Which one to use ?
console.log('' == '0');
console.log(0 == '');
console.log(0 == '0');
console.log(false == 'false');
console.log(false == '0');
console.log(false == undefined);
console.log(false == null);
console.log(null == undefined);
console.log(' \t\r\n ' == 0);
