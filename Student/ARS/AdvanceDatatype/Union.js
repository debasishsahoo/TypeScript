"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union
let a;
a = 1;
console.log(typeof a);
console.log(a);
a = 'Hello';
console.log(typeof a);
console.log(a);
function fun(arg) {
    if (typeof arg === 'number') {
        return true;
    }
    else if (typeof arg === 'string') {
        console.log('String');
    }
    else if (typeof arg === 'object') {
        for (let i in arg) {
            console.log(arg[i]);
        }
    }
    else {
        return false;
    }
}
fun(1);
fun('a');
class Product {
    constructor(n, c) {
        this.name = n;
        this.code = c;
    }
}
class Student {
    constructor(n, c) {
        this.name = n;
        this.code = c;
    }
}
function getName(item) {
    let desc;
    if (item instanceof Product) {
        desc = `${item.name} and ${item.code}`;
    }
    else if (item instanceof Student) {
        desc = `${item.name} and ${item.code}`;
    }
    else {
        desc = 'Nothing Found';
    }
}
function Engine(arg) {
    if (arg == 'Start' || arg == true || arg == 1) {
        console.log('Engine Start');
    }
    if (arg == 'Stop' || arg == false || arg == 0) {
        console.log('Engine Stop');
    }
}
Engine('start');
Engine('Start');
