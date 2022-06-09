"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function display() {
    throw new Error('error');
}
//display();
function dosum(x, y) {
    return x + y;
}
//dosum('deb', 'sahoo');
//Anonymous function
let x = function (a, b) {
    return a * b;
};
x(2, 8);
//Optional Parameter
let y = function (a, b) {
    return a + ' ' + b;
};
y('Hello');
//default parameter
let z = function (a, b = 'deb') {
    return a + ' ' + b;
};
console.log('z:', z('Hello'));
console.log('z:', z('Hello', 'sayan'));
