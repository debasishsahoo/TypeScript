"use strict";
//Named Functions
function display() {
    console.log('Hello TypeScript!');
}
display(); //Output: Hello TypeScript
function Sum(x, y) {
    return x + y;
}
Sum(2, 3); // returns 5
//Anonymous Function
let greeting = function () {
    console.log('Hello TypeScript!');
};
greeting(); //Output: Hello TypeScript!
let Sum = function (x, y) {
    return x + y;
};
Sum(2, 3); // returns 5
//Function Parameters
function Greet(greeting, name) {
    return greeting + ' ' + name + '!';
}
Greet('Hello', 'Steve'); //OK, returns "Hello Steve!"
Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
Greet('Hi', 'Bill', 'Gates'); //Compiler Error: Expected 2 arguments, but got 3.
//Optional Parameters
function Greet(greeting, name) {
    return greeting + ' ' + name + '!';
}
Greet('Hello', 'Steve'); //OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi', 'Bill', 'Gates'); //Compiler Error: Expected 2 arguments, but got 3.
//Default Parameters
function Greet(name, greeting = 'Hello') {
    return greeting + ' ' + name + '!';
}
Greet('Steve'); //OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"
//Function Callings
function Greet(greeting = 'Hello', name) {
    return greeting + ' ' + name + '!';
}
Greet(undefined, 'Steve'); //returns "Hello Steve!"
Greet('Hi', 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"
