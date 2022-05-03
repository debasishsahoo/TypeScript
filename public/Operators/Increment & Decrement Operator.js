"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Increment Operator ++x or x++. This is equal to x=x+1
//Decrement Operator --x or x--. This is equal to x=x-1
let x = 10;
++x; //increment the value by one  x=x+1
console.log(x); //11
let y = 10;
y--; //decrement the value by one  x=x-1
console.log(y); //9
//Prefix & Postfix
let a = 10;
a++;
console.log(a); // 11
++a;
console.log(a); // 11
//Difference Between Prefix & Postfix
a = 10;
let b = ++a; //a is incremented, a is then assigned to b
console.log(b); //11
console.log(a); //11
a = 10;
b = a++; //a is assigned to b, then a is incremented
console.log(b); //10
console.log(a); //11
