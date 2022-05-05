"use strict";
//Private ->Same Class Access only
//Protected
//Public ->Any one can Access
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Student1 = /** @class */ (function () {
    function Student1(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    return Student1;
}());
var stud = new Student1(101, 'Debasish Sahoo');
console.log(stud.studCode + ' ' + stud.studName);
//Private
//The private access modifier cannot be accessible outside of its containing class. It ensures that the class members are visible only to that class in which it is containing.
var Student2 = /** @class */ (function () {
    function Student2(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student2.prototype.display = function () {
        return "My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, ".");
    };
    return Student2;
}());
var student = new Student2(1, 'Debasish');
console.log(student.display());
//Protected
var Student3 = /** @class */ (function () {
    function Student3(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    return Student3;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(code, name, department) {
        var _this = _super.call(this, code, name) || this;
        _this.department = department;
        return _this;
    }
    Person.prototype.getElevatorPitch = function () {
        return "My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, " and I am in ").concat(this.department, " Branch.");
    };
    return Person;
}(Student3));
var joeRoot = new Person(1, 'Debasish Sahoo', 'CS');
console.log(joeRoot.getElevatorPitch());
