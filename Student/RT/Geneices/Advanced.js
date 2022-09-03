"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArray(item) {
    return new Array().concat(item);
}
let x = getArray([1, 2, 3, 4]);
let y = getArray(['Hello', 'World']);
let z = getArray([null, null, null, null]);
x.push(12);
x.push('Rumana');
console.log('x:', x);
y.push('Typescript');
y.push(45);
console.log('y:', y);
z.push(10);
z.push('a');
console.log('z:', z);
function getarray(item) {
    return new Array().concat(item);
}
let x1 = getarray([1, 2, 3, 4]);
let y1 = getarray(['Hello', 'World']);
let z1 = getarray([null, null, null, null]);
x1.push(12);
x1.push('Rumana');
function Details(id, name, marks) {
    return `${id},${name},${marks}`;
}
let a = Details(1, 'Rumana', [1, 2, 3, 4, 5]);
function Details1(id, name) {
    return `${id},${name}`;
}
let b = Details1(12, 'Tanusree');
class Person {
    constructor(a, b) {
        this.fn = a;
        this.ln = b;
    }
}
function fun(arg) {
    console.log(`${arg}`);
}
let s = new Person('Tanusree', 'Maji');
fun(s);
