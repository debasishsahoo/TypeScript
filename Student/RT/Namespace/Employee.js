"use strict";
///<reference path="./StringUtil.ts">
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(eid, ename) {
        this.name = StringUtility.ToCapital(ename);
        this.id = eid;
    }
    displayEmp() {
        console.log(`id:${this.id} and name:${this.name}`);
    }
}
exports.Employee = Employee;
let Emp = new Employee(12, 'deb');
Emp.displayEmp();
