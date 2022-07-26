"use strict";
function abc(msg, name) {
    return `${msg} ${name}`;
}
console.log(abc('Hello', 'Debasish', 'tanu', 'rumana'));
//Array Diststuring
function def(msg, ...name) {
    return `${msg} ${name}`;
}
console.log(def('Hello', 'Debasish', 'tanu', 'ruman'));
function ghi(...name, msg) {
    return `${msg} ${name}`;
}
console.log(ghi('Hello', 'Debasish', 'tanu', 'ruman'));
