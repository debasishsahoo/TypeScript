"use strict";
// export {};
// let ax1: number = 1;
// let ax2: number = 2;
// console.log(`The add id ${ax1} +${ax2} is ${ax1 + ax2}`);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firstName = 'Sachin';
var lastName = 'Tendulkar';
var topic = 'Typescript';
function say1(strings, firstName, lastName, topic) {
    console.log(strings);
    console.log(strings[0]);
    console.log(firstName);
    console.log(strings[1]);
    console.log(lastName);
    console.log(strings[2]);
    console.log(topic);
    console.log(strings[3]);
    var str = strings[0] +
        firstName +
        strings[1] +
        lastName +
        strings[2] +
        topic +
        strings[3];
    return str;
}
console.log(say1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Welcome, ", " ", ". Learn ", " here"], ["Welcome, ", " ", ". Learn ", " here"])), firstName, lastName, topic));
var templateObject_1;
