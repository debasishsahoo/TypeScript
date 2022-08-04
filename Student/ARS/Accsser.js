"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    get Details() {
        return `${this._Name} & ${this._Dept}`;
    }
    set Name(name) {
        this._Name = name;
    }
    set Dept(dept) {
        this._Dept = dept;
    }
}
let stud = new Student();
stud.Name = 'Debasish';
stud.Dept = 'CSE';
console.log(stud.Details);
