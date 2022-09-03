"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Spacial Data Type
let x;
x = 23;
console.log(typeof x);
console.log(x);
x = 'Deb';
console.log(x);
console.log(typeof x);
x = true;
console.log(x);
console.log(typeof x);
function abc(a, b) {
    return a + b;
}
console.log(abc(2, 2));
console.log(abc('A', 'C'));
console.log(abc('A', 2));
console.log(abc(true, true));
console.log(abc(false, true));
console.log(abc(null, null));
console.log(abc(undefined, undefined));
console.log(abc(NaN, undefined));
