"use strict";
///<reference path='./SU.ts'/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(x, y) {
        this.name = SU.ToCapital(x);
        this.title = SU.ToSmall(y);
    }
    getFullName() {
        return concat(this.name, this.title);
    }
}
exports.Student = Student;
