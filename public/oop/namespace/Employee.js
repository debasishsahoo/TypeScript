"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
/// <reference path="./StringUtility.ts" />
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log('Employee Code: ' + this.empCode + ', Employee Name: ' + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
