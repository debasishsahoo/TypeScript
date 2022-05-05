"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = 'hello world';
console.log(typeof str);
var strVal;
strVal = 10; //Type '10' is not assignable to type'string'
var person = {
    code: '1',
    name: 'Rahul',
};
var employee;
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
    var formattedAmount = 'Rs. ' + parseInt(money); //ERROR
    console.log(formattedAmount);
    return formattedAmount;
}
//Argument of type 'string | number' is not assignable to parameter of type 'string'.
//Type 'number' is not assignable to type 'string'.
function formatAmount1(money) {
    var formattedAmount;
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
var person1 = {
    code: "1", name: "Rahul"
};
//Use it to declare variable of type personTye
var employee1;
var customer1;
var salesPerson1;
