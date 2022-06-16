"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dosum(x, y) {
    return x + y;
}
function avg(x, y, c) {
    return c(x, y) / 2;
}
let result = avg(8, 5, dosum);
console.log('result:', result);
//10,15
function abc(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    return 0;
}
let arr = [1, 2, 8, 3, 7, 9, 4, 2];
arr.sort(abc);
console.log('arr:', arr);
