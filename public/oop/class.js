"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    //constructor
    function Student(ID, NAME) {
        this.id = ID;
        this.name = NAME;
    }
    //Methods
    Student.prototype.GetName = function () {
        return "Name: ".concat(this.name);
    };
    Student.prototype.GetDetails = function (id) {
        if (id !== null) {
            return "ID: ".concat(this.id, " and Name: ").concat(this.name);
        }
        else {
            return "Please Send Any ID";
        }
    };
    return Student;
}());
var obj = new Student(1, 'Sourav');
console.log('obj:', obj);
console.log('Name:', obj.GetName());
console.log('Name:', obj.GetDetails(1));
