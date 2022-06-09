"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//named function
function display() {
    console.log('hello this is function');
}
//function ->keyword
//display ->function Name
//{} -> function Body
display(); //function calling
//Argumented function
function dosum(x, y) {
    return x + y;
}
dosum('debasish', 'sahoo');
//Anonymous function
let x = function () {
    console.log('hello typescrtip');
};
x();
let y = function (x, y) {
    return x * y;
};
console.log('The product is', y(2, 4));
//optional Parameter
let greet = function (a, b) {
    return a + ' ' + b;
};
console.log('greet:', greet('hello', 'deb'));
console.log('greet:', greet('hello'));
//Default Parameter
let greet1 = function (a, b = 'Sayan') {
    return a + ' ' + b;
};
console.log('greet:', greet1('hello', 'deb'));
console.log('greet:', greet1('hello'));
