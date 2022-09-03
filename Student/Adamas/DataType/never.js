"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
function SayHi() {
    console.log('Hi');
    //throw new Error();
    return a;
    console.log('Hi');
}
let x = function () {
    throw new Error();
};
x();
let y = () => {
    throw new Error();
};
y();
