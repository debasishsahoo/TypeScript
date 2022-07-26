"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//normal function
function fun1() {
    console.log('this is fun');
}
fun1();
//anomies function
let x = function () {
    console.log('this is x');
};
x();
let y = () => {
    console.log('this is y');
};
y();
let z = (x, y) => {
    console.log(x + y);
};
z(5, 8);
