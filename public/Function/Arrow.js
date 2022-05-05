"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum = function (x, y) {
    return x + y;
};
sum(10, 20); //returns 30
var Print = function () { return console.log('Hello TypeScript'); };
Print(); //Output: Hello TypeScript
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + ' ' + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram');
emp.display();
