"use strict";
let firstName = 'Sachin';
let lastName = 'Tendulkar';
let topic = 'Typescript';
function say(strings, firstName, lastName, topic) {
    let str = strings[0] +
        firstName +
        strings[1] +
        lastName +
        strings[2] +
        topic +
        strings[3];
    return str;
}
console.log(say `Welcome, ${firstName} ${lastName}. Learn ${topic} here`);
function hello(x, y, z) {
    console.log(x + y + z);
}
hello(5, 5, 4);
