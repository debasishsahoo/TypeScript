"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = '';
const num2 = 48;
let a = 0x37cf; //hex number
let b = 0o337; //ocatal
let c = 0b11110001; //binary
let d = 90000000000000011456456415646544465454n;
//Problam
let x = '150';
//Sol
let nobj = new Number('1500');
console.log(typeof nobj);
let MyNumber = 10667.987;
//localstring
console.log(MyNumber.toLocaleString('bn-in'));
console.log(MyNumber.toLocaleString('bn-bd'));
console.log(MyNumber.toLocaleString('en-in'));
console.log(MyNumber.toLocaleString('hi-in'));
console.log(MyNumber.toLocaleString('ar-eg'));
//tofixed
console.log(MyNumber.toFixed());
console.log(MyNumber.toFixed(1));
console.log(MyNumber.toFixed(2));
console.log(MyNumber.toFixed(3));
console.log(MyNumber.toFixed(4));
console.log(MyNumber.toFixed(5));
let MyNum = 10.4679;
console.log(MyNum.toPrecision(1));
console.log(MyNum.toPrecision(2));
console.log(MyNum.toPrecision(3));
console.log(MyNum.toPrecision(4));
console.log(MyNum.toPrecision(5));
console.log(MyNum.toPrecision(6));
console.log(MyNum.toPrecision(7));
console.log(MyNum.toPrecision(8));
//Not A number
console.log(0 / 0);
//EPSILON Calculation
//0.1+0.2=0.3
console.log(0.1 + 0.2);
//1/3=0.33333
console.log(1 / 3);
console.log(0.3333333333333333 * 3);
console.log(0.1 + 0.2 == 0.3);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MAX_SAFE_INTEGER + 4);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 2));
console.log(3 / 0);
console.log(-3 / 0);
console.log(Infinity > 1000);
