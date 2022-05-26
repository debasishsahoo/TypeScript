"use strict";
// export {};
// let ax1: number = 1;
// let ax2: number = 2;
// console.log(`The add id ${ax1} +${ax2} is ${ax1 + ax2}`);
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = 'Sachin';
let lastName = 'Tendulkar';
let topic = 'Typescript';
function say1(strings, firstName, lastName, topic) {
    console.log(strings);
    console.log(strings[0]);
    console.log(firstName);
    console.log(strings[1]);
    console.log(lastName);
    console.log(strings[2]);
    console.log(topic);
    console.log(strings[3]);
    let str = strings[0] +
        firstName +
        strings[1] +
        lastName +
        strings[2] +
        topic +
        strings[3];
    return str;
}
console.log(say1 `Welcome, ${firstName} ${lastName}. Learn ${topic} here`);
