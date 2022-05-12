"use strict";
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE + 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MAX_SAFE_INTEGER + 4);
console.log(Number.MAX_SAFE_INTEGER + 7);
console.log(Number.MAX_SAFE_INTEGER + 8);
console.log(Number.MAX_SAFE_INTEGER + 10);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.EPSILON);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 == 0.30000000000000004);
function NumberEqual(x, y) {
    console.log(Math.abs(x - y));
    return Math.abs(x - y) < Number.EPSILON;
}
console.log(NumberEqual(0.1 + 0.2, 0.3));
console.log(3 / 0);
