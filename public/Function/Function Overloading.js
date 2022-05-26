"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b, c) {
    return a + b;
}
add('Hello ', 'Steve'); // returns "Hello Steve"
add(10, 20); // returns 30
function display(a, b) {
    //Compiler Error: Duplicate function implementation
    //console.log(a + b);
    return a + b;
}
function display(a, b) {
    //Compiler Error: Duplicate function implementation
    //console.log(a);
    return a + b;
}
display('deb', 'sahoo');
display(5, 9);
function grettings(person) {
    return `Hello, ${person}`;
}
let xh1 = grettings('World');
console.log('xh1:', xh1);
function grettings(person) {
    return `Hello, ${person}`;
}
let xh1 = grettings('World');
console.log('xh1:', xh1);
function greet(person) {
    if (typeof person === 'string') {
        return `Hello ${person}`;
    }
    else if (Array.isArray(person)) {
        return person.map((name) => `Hello ${person}`);
    }
    else if (typeof person === 'number') {
        return person;
    }
    throw new Error(`Unable to Greet`);
}
