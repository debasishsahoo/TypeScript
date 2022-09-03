"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Interface Used as A Datatype
let customer = {
    fn: `Debasish`,
    ln: `Sahoo`,
    sayHi: () => {
        return `HI`;
    },
};
//Interface Used as A Datatype
let employee = {
    fn: `Ravi`,
    ln: `Sharma`,
    sayHi: () => {
        return `Hello`;
    },
};
console.log(`Customer Object Details`);
console.log(customer.sayHi());
console.log(customer.fn);
console.log(customer.ln);
console.log(`Employee Object Details`);
console.log(employee.sayHi());
console.log(employee.fn);
console.log(employee.ln);
//Interface Used as A Parent Class
class Abc {
    constructor(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }
    sayHi() {
        return 'HI';
    }
}
let a = new Abc('deb', 'sahoo');
let xyz = {
    fn: 'deb',
    ln: 'sahoo',
    age: 34,
    sayHi: () => {
        return 'hi';
    },
};
