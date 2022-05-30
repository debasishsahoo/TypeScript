"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let password = '1234';
class Student {
    get fullname() {
        return this._fullName;
    }
    set fullname(x) {
        if (password && password == '1234') {
            this._fullName = x;
        }
        else {
            console.log(`plese proive Correct`);
        }
    }
}
let stud = new Student();
stud.fullname = 'Debasish Sahoo';
console.log(stud.fullname);
