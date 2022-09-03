"use strict";
///<reference path='./StringUtil.ts'/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(x, y) {
        this.name = StringUtility.ToCapital(x);
        this.title = StringUtility.ToSmall(y);
    }
}
exports.Student = Student;
