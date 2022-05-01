"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//The value null represents the intentional absence of any object value. It represents nothing or no value. null means we know that the variable does not have any value. TypeScript does not set the value of a variable to null. We need to do set it explicitly.
let a = null;
console.log(a);
console.log(typeof a);
function person(name, dateOfMarriage) {
    return {
        name: name,
        dateOfMarriage: dateOfMarriage,
    };
}
console.log(person('Debasish Sahoo', null));
//Null Data Type
let NullVarible;
console.log(NullVarible);
NullVarible = null;
console.log(NullVarible);
//Allowed
NullVarible = null;
NullVarible = undefined; //only if strictNullCheck is disabled
//Not Allowed
NullVarible = 10; //type '10' is not assignable to type 'null'
NullVarible = {};
//Non Nullable Types
let anyVar;
let nullVar;
anyVar = null; //ok
nullVar = null; //ok
let undefVar;
let numVar;
//NOT ok
undefVar = null; //Type 'null' is not assignable to type 'undefined'.
numVar = null; //Type 'null' is not assignable to type 'number'.
//Typeof null is object
let a2 = null;
console.log(typeof a2);
//Checking for Null
let nVar;
nVar = null;
console.log(nVar); //null
console.log(typeof nVar); //object
console.log(nVar == null); //true
console.log(nVar === null); //true
console.log(null == undefined); //true
let a5; //a has the default value of undefined
console.log(a5 == null); //true because both null & undefined is treated as no value
console.log(a5 === null);
//null is falsy
let a6 = null;
if (a6) {
    console.log('true'); //this code does not execute
}
if (!a6) {
    console.log('false'); //false
}
let a7 = null;
//loose equality check
console.log(a7 == false); //false
console.log(a7 == true); //false
//Strict equality check
console.log(a7 === false); //false
console.log(a7 === true);
