"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(f, l, a) {
        this.fn = f;
        this.ln = l;
        this.age = a;
    }
    fullname() {
        return this.fn + ' ' + this.ln;
    }
    getage() {
        return this.age;
    }
}
let empobj = new Employee('Arnab', 'Ghosh', 23);
console.log('fullname:', empobj.fullname());
console.log('Age:', empobj.getage());
