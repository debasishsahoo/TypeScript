"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Where String is parameter datatype and void is the return type
function log(x) {
    console.log(x);
    return 5;
}
log(5);
log('Sahoo');
log(true);
log(undefined);
//public static void main() this main function return nothing
let useless = undefined;
//useless = 1;
console.log('useless:', useless);
let a;
let b;
a = undefined;
a = 'test';
b = a; //ok
a = b;
