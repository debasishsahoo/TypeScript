"use strict";
var passcode = 'secret passcode';
var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Unauthorized update of student detail!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var stud = new Student();
stud.fullName = 'Virat Kohli';
if (stud.fullName) {
    console.log(stud.fullName);
}
