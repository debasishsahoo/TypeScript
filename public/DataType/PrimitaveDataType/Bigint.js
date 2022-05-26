"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//The bigint is a new primitive type in Typescript. It is available only if you target esnext in tsconfig.json. it represents the whole number. It can hold numbers larger than 253 – 1. The BigInt uses the arbitrary-precision arithmetic.
//Defining bigint
//A bigInt is created by appending n to the end of an integer literal
let big1 = 9007199254740991n;
console.log(typeof big1);
//calling the function Global function BigInt()
let big2 = BigInt(9007199254099);
console.log(typeof big2);
let bigNum = BigInt('9045141578140991');
console.log(bigNum);
//Hex & binary numbers.
let bigHex = BigInt('0xffffffffffffff');
console.log(bigHex);
const bigBin = BigInt('0b11111111111111111111111111111111111111111111111111111');
console.log(bigBin);
//Arithmetic Operations
//The BigInt can be used with the following arithmetic operations +, *, -, **, %. Bitwise operators like &, | , ^ , ~, << , >>, (except >>> Zero fill right shift) operators. The unary operator + is also not supported.
let bigVar = 9007199254740991n;
let b = bigVar + 1n;
console.log(b);
b = bigVar * 10n;
console.log(b);
b = bigVar / 5n;
console.log(b);
//The / division operator rounds of the final result to the whole number.
console.log(4n / 2n);
console.log(5n / 2n);
//:-Convert Number to BigInt:-//
let numVar = 100;
let bigVar1 = 100n;
//console.log(numVar+bigVar1); //Getting Error
let bigVar2 = BigInt(numVar);
console.log(bigVar);
console.log(typeof bigVar2);
//Convert BigInt to Number
let bigVar4 = 100n;
let numVar2 = Number(bigVar4);
console.log(numVar2);
console.log(typeof numVar2);
//Comparison operators
console.log(1n < 2);
console.log(2n > 1);
console.log(2n > 2);
console.log(2n >= 2);
// console.log(0n===0);
// console.log(0n == 0);
