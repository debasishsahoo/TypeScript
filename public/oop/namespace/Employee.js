"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
/// <reference path="./StringUtility.ts" />
class Employee {
    constructor(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log('Employee Code: ' + this.empCode + ', Employee Name: ' + this.empName);
    }
}
exports.Employee = Employee;
