"use strict";
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE + 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER + 1);
// console.log(Number.MAX_SAFE_INTEGER + 2);
// console.log(Number.MAX_SAFE_INTEGER + 3);
// console.log(Number.MAX_SAFE_INTEGER + 4);
// console.log(Number.MAX_SAFE_INTEGER + 7);
// console.log(Number.MAX_SAFE_INTEGER + 8);
// console.log(Number.MAX_SAFE_INTEGER + 10);
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
// console.log(Number.EPSILON);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);
// console.log(0.1 + 0.2 == 0.30000000000000004);
// function NumberEqual(x: number, y: number): boolean {
//   console.log(Math.abs(x - y));
//   return Math.abs(x - y) < Number.EPSILON;
// }
// console.log(NumberEqual(0.1 + 0.2, 0.3));
// console.log(3 / 0);
outerloop: for (var i_1 = 0; i_1 <= 24; i_1++) {
    innerloop: for (var j_1 = 0; j_1 <= 60; j_1++) {
        subinnerloop: for (var z_1 = 0; z_1 <= 60; z_1++) {
            console.log(i_1, ':', j_1, ':', z_1);
        }
    }
}
