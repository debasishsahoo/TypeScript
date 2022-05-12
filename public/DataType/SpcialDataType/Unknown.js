"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//unknown type means that the type of variable is not known. It is the type-safe counterpart of any. We can assign anything to an unknown variable, but the unknown isn’t assignable to any other types except to unknown and any. To use an unknown type, we need to first assert its type or narrow it to a more specific type.
//unknown Type
var unknownVar;
unknownVar = true; //boolean
unknownVar = 10; //number
unknownVar = 10n; //BigInt  >>=ES2020
unknownVar = 'Hello World'; //String
unknownVar = ['1', '2', '3', '4']; //Array
unknownVar = { firstName: '', lastName: '' }; // Object
unknownVar = null; // null
unknownVar = undefined; // undefined
unknownVar = Symbol('key'); // Symbol
var value;
var valuex = value; // OK
var valuey = value; // OK
value1: boolean = value; // Error
value2: number = value; // Error
var value3 = value; // Error
var value4 = value; // Error
var value5 = value; // Error
var value6 = value; // Error
value1: boolean = value; // OK
value2: number = value; // OK
value3: string = value; // OK
value4: object = value; // OK
value5: any[] = value; // OK
value6: Function = value; // OK
//Type Assertion
var value;
var value1 = value; // OK
var value2 = value; // OK
var value3 = value; // OK
var value4 = value; // OK
var value5 = value; // OK
var value6 = value; // OK
//Narrowing the unknown Type
var value;
if (typeof value == "boolean") {
    var value1_1 = value; // OK
}
if (typeof value == "number") {
    var value1_2 = value; // OK
}
if (typeof value == "string") {
    var value1_3 = value; // OK
}
//Unknown Vs Any
