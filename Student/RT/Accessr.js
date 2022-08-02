"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    get fullname() {
        return this._fullName;
    }
    set fullName(name) {
        this._fullName = name;
    }
}
let stud = new Student();
stud.fullName = 'debasish';
console.log(stud.fullname);
