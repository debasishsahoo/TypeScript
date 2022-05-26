"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let customer = {
    firstName: 'Ajay',
    lastName: 'Laddha',
    sayHi: () => {
        return 'Hi';
    },
};
console.log('Customer Object Details: ');
console.log(customer.sayHi());
console.log(customer.firstName);
console.log(customer.lastName);
var employee = {
    firstName: 'Vikas',
    lastName: 'Jainer',
    sayHi: () => {
        return 'Hello';
    },
};
console.log('Employee  Object Details: ');
console.log(employee.sayHi());
console.log(employee.firstName);
console.log(employee.lastName);
