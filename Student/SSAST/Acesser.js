"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let password = '1234';
class Student {
    get fullName() {
        return `Name:${this._fullname}`;
    }
    set fullName(newName) {
        if (password && password == '1234') {
            this._fullname = newName;
        }
        else {
            console.log(`Please Provide Correct Password`);
        }
    }
}
let stud = new Student();
console.log((stud.fullName = 'deb')); // calling set by using assign operator
console.log(stud.fullName); //calling get
console.log((stud.fullName = 'kaka'));
console.log(stud.fullName);
stud.fullName = 'Debasish';
console.log(stud.fullName);
