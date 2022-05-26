"use strict";
function Greet(greeting, ...names) {
    return greeting + ' ' + names.join(', ') + '!';
}
Greet('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"
Greet('Hello'); // returns "Hello !"
let Greet = (greeting, ...names) => {
    return greeting + ' ' + names.join(', ') + '!';
};
Greet('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"
Greet('Hello'); // returns "Hello !"
function Greet(...names, greeting) {
    // Compiler Error
    return greeting + ' ' + names.join(', ') + '!';
}
