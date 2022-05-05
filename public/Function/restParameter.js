"use strict";
function Greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + ' ' + names.join(', ') + '!';
}
Greet('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"
Greet('Hello'); // returns "Hello !"
var Greet = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + ' ' + names.join(', ') + '!';
};
Greet('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"
Greet('Hello'); // returns "Hello !"
function Greet(greeting) {
    // Compiler Error
    return greeting + ' ' + names.join(', ') + '!';
}
