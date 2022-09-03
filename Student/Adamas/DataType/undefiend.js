"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a; // no memory allocation
console.log('a:', a);
//Optinal Parameter
function xyz(a) {
    console.log('a:', a);
    return a;
}
console.log(xyz());
