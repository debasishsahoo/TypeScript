"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//unknown type means that the type of variable is not known. It is the type-safe counterpart of any. We can assign anything to an unknown variable, but the unknown isn’t assignable to any other types except to unknown and any. To use an unknown type, we need to first assert its type or narrow it to a more specific type.
//unknown Type
let unknownVar;
unknownVar = true; //boolean
unknownVar = 10; //number
unknownVar = 10n; //BigInt  >>=ES2020
unknownVar = 'Hello World'; //String
unknownVar = ['1', '2', '3', '4']; //Array
unknownVar = { firstName: '', lastName: '' }; // Object
unknownVar = null; // null
unknownVar = undefined; // undefined
unknownVar = Symbol('key'); // Symbol
let value;
let valuex = value; // OK
let valuey = value; // OK
let value1 = value; // Error
let value2 = value; // Error
let value3 = value; // Error
let value4 = value; // Error
let value5 = value; // Error
let value6 = value; // Error
value1: boolean = value; // OK
value2: number = value; // OK
value3: string = value; // OK
value4: object = value; // OK
value5: any[] = value; // OK
value6: Function = value; // OK
//Type Assertion
let value;
let value1 = value; // OK
let value2 = value; // OK
let value3 = value; // OK
let value4 = value; // OK
let value5 = value; // OK
let value6 = value; // OK
//Narrowing the unknown Type
let value;
if (typeof value == "boolean") {
    let value1 = value; // OK
}
if (typeof value == "number") {
    let value1 = value; // OK
}
if (typeof value == "string") {
    let value1 = value; // OK
}
//Unknown Vs Any
let x = ;
