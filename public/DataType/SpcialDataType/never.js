"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//The Typescript Never type represents the type that never happens or the values that never occur. The following are such places where we use the never type. never type represent a state which shouldn’t exist
//methods
function SayHi() {
    console.log('HI');
}
let speech = SayHi();
console.log('speech:', speech);
//Characteristics of Never
let neverVar;
let v1;
let v2;
let v3;
let v4;
let v5;
v1 = neverVar;
v2 = neverVar;
v3 = neverVar;
v4 = neverVar;
v5 = neverVar;
//The following results in an error
neverVar = v1;
neverVar = v2;
neverVar = v3;
neverVar = v4;
neverVar = v5;
//The Typescript infers the return type as never if a function expression or arrow function.
//has no return type annotation
//has no return statement
//Or has a return statement which returns never
//does not have an endpoint
let x = function (message) {
    throw new message();
};
//arrow function
let y = (message) => {
    throw new message();
};
let x1 = function (message) {
    throw new message();
};
// f a function has its return type annotated with never.
//All of its return statements (if any) must return never
//The endpoint of the function must not be reachable.
function x1(message) {
    return message;
}
function x2(message) {
    let y = message;
}
//Void Vs Never
//We use void when the function does return but does not return a value. The typescript infers the return value as void.
//We use void when the function does return but does not return a value.
let z = (a, b) => {
    let c = a + b;
};
//The never return type when the function does not return at all.
let z = function infiniteLoop() {
    while (true) { }
};
