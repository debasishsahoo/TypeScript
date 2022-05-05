"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.age = void 0;
exports.age = 20;
class Employee {
    constructor(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log('Employee Code: ' + this.empCode + ', Employee Name: ' + this.empName);
    }
}
exports.Employee = Employee;
let companyName = 'XYZ';
