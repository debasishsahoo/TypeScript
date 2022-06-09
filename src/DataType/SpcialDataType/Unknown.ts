export{}
//unknown type means that the type of variable is not known. It is the type-safe counterpart of any. We can assign anything to an unknown variable, but the unknown isn’t assignable to any other types except to unknown and any. To use an unknown type, we need to first assert its type or narrow it to a more specific type.
//unknown Type
let unknownVar: unknown;

unknownVar = true; //boolean
unknownVar = 10; //number
unknownVar = 10n; //BigInt  >>=ES2020
unknownVar = 'Hello World'; //String
unknownVar = ['1', '2', '3', '4']; //Array
unknownVar = { firstName: '', lastName: '' }; // Object
unknownVar = null; // null
unknownVar = undefined; // undefined
unknownVar = Symbol('key'); // Symbol

let value: unknown;

let valuex: unknown = value; // OK
let valuey: any = value; // OK

let value1: boolean = value; // Error
let value2: number = value; // Error
let value3: string = value; // Error
let value4: object = value; // Error
let value5: any[] = value; // Error
let value6: Function = value; // Error

value1: boolean = value as boolean; // OK
value2: number = value as number; // OK
value3: string = value as string; // OK
value4: object = value as object; // OK
value5: any[] = value as any; // OK
value6: Function = value as Function; // OK


//Type Assertion
 
let value: unknown;
 
let value1: boolean = value as boolean;   // OK
let value2: number = value as number;     // OK
let value3: string = value as string;     // OK
let value4: object = value as object;     // OK
let value5: any[] = value as any;         // OK
let value6: Function = value as Function; // OK


//Narrowing the unknown Type

let value: unknown;
 
if (typeof value =="boolean") {
    let value1: boolean = value;   // OK
}
if (typeof value =="number") {
    let value1: number = value;   // OK
}
if (typeof value =="string") {
    let value1: string = value;   // OK
}
 
//Unknown Vs Any
let x:symbol=👍;

