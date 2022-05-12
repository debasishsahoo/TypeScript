"use strict";
console.log(0.1 + 0.2); //0.3
console.log(Number.EPSILON);
function numEqual(x, y) {
    return Math.abs(x - y) > Number.EPSILON;
}
console.log(numEqual(0.1 + 0.2, 0.3));
//-32768    +32767    2bit
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1000000000);
console.log(3 / 0);
console.log(-3 / 0);
console.log(0 / 0);
console.log(Math.pow(10, 1000));
console.log(1 / 3);
console.log(0.3333333333333333 * 3);
//0.999999999999999
var myNumber = 10.5679; //   f->10.5   c->11
console.log(myNumber.toPrecision(1));
console.log(myNumber.toPrecision(2));
console.log(myNumber.toPrecision(3));
console.log(myNumber.toPrecision(4));
console.log(myNumber.toPrecision(5));
console.log(myNumber.toPrecision(6));
console.log(myNumber.toPrecision(7));
console.log(myNumber.toPrecision(8));
var a1 = ;
