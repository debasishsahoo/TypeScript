"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    console.log('iife');
})();
let add1 = (x, y) => {
    return x + y;
};
add1(2 + 5, 8);
let n = 45;
let m = 85;
let add2 = ((x, y) => {
    return x + y;
})(n, m);
add2;
