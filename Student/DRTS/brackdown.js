"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//normal function
function abc(a) {
    console.log(a + 100);
}
abc(2);
//anonymous function
let x = function (a) {
    console.log(a + 100);
};
x(2);
//Arrow function
let y = (a) => {
    console.log(a + 100);
};
y(2);
//IIFE function
((a) => {
    console.log(a + 100);
})(2);
