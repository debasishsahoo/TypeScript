"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = 'hello world';
console.log(typeof str);
var strVal;
strVal = 10; //Type '10' is not assignable to type'string'
let person = {
    code: '1',
    name: 'Rahul',
};
let employee;
employee = { code: '2', name: 'Sachin' }; //OK
employee = { code: '2', name: 'Sachin', salary: 1000 }; //ERROR
//Type '{ code: string; name: string; salary: number; }' is not assignable to type '{ code: string; name: string; }'
console.log(typeof 1337); // number
console.log(typeof 'foo'); // string
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof Math); // object
console.log(typeof Math.round); // function
console.log(typeof Symbol()); // symbol
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof [1, 2, 3]); // object
//Typeof As Type Guard
function formatAmount(money) {
    let formattedAmount = 'Rs. ' + parseInt(money); //ERROR
    console.log(formattedAmount);
    return formattedAmount;
}
//Argument of type 'string | number' is not assignable to parameter of type 'string'.
//Type 'number' is not assignable to type 'string'.
function formatAmount1(money) {
    let formattedAmount;
    if (typeof money == 'string') {
        formattedAmount = 'Rs. ' + parseInt(money);
    }
    else {
        formattedAmount = 'Rs. ' + money;
    }
    console.log(formattedAmount);
    return formattedAmount;
}
//Use with Type Aliases
let person1 = {
    code: "1", name: "Rahul"
};
//Use it to declare variable of type personTye
let employee1;
let customer1;
let salesPerson1;
