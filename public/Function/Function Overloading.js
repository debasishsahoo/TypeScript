"use strict";
function add(a, b) {
    return a + b;
}
add('Hello ', 'Steve'); // returns "Hello Steve"
add(10, 20); // returns 30
function display(a, b) {
    //Compiler Error: Duplicate function implementation
    console.log(a + b);
}
function display(a) {
    //Compiler Error: Duplicate function implementation
    console.log(a);
}
