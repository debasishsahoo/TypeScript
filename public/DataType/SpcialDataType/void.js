"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Where String is parameter datatype and void is the return type
//Assigning to void
let a1;
a1 = undefined;
let a;
a = 'test';
a: undefined;
let b;
b = a;
a = b;
const f1 = () => {
    return 10;
};
const f2 = () => true;
const f3 = function () {
    return 'Hello';
};
//v1, v2 & v3 are of type void
const v1 = f1();
const v2 = f2();
const v3 = f3();
console.log(v1); //10
console.log(v2); //true
console.log(v3); //hello
//Since v1,v2 & v3 are voids you cannot use them
v1 + 10; //not ok
//Operator '+' cannot be applied to types 'void' and 'number'
v1 + 10; //not ok
const f1 = () => {
    return 10;
};
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
