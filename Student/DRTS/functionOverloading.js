"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b, c) {
    return a + b;
}
console.log(add('Tanu ', 'Ruma'));
console.log(add(2, 5));
console.log(add(2, 5, 5));
function display(a, b, c) {
    return a + b;
}
console.log(display('abc ', 'efg'));
console.log(display(7, 9));
// function greet(x: string): string {
//   return `Hello ,${x}`;
// }
// let xh1: string = greet('Debasish ');
// console.log('xh1:', xh1);
function greet(x) {
    return `Hello ,${x}`;
}
let xh1 = greet('Debasish ');
console.log('xh1:', xh1);
let xh2 = greet(5);
console.log('xh2:', xh2);
let xh3 = greet(false);
console.log('xh3:', xh3);
let xh4 = greet(null);
console.log('xh4:', xh4);
function newx(x) {
    return x;
}
function newy(y) { }
