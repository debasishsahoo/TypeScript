"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let y = '1';
console.log(typeof y); //string
console.log(typeof +y); //number
console.log(+y); //1
console.log(-y); //-1
console.log(+'100'); //100
console.log(+'100.5175'); //100.5175
//Empty string & null is zero
console.log(+''); //0
console.log(+' '); //0
console.log(+null); //0
//Undefined
console.log(+undefined); //Nan
//Infinity
console.log(+Infinity); //Infinity
//Boolean
console.log(+true); //1
console.log(+false); //0
//Hexadecimal
console.log(+'0x22'); //34
console.log(+'0022'); //22
console.log(+'0o51'); //41
console.log(+'3.125e7'); //31250000
//If fails to convert to number, then returns NaN
console.log(+'10AA0.5175'); //NaN
console.log(+'35 35'); //NaN
console.log(+'AB 35'); //NaN
console.log(+'hello'); //NaN
