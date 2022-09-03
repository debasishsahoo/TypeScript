"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    //   constructor(x: string) {
    //     this._fullname = x;
    //   }
    //seter
    set fullname(name) {
        this._fullname = name;
    }
    //geter
    get fullname() {
        return this._fullname;
    }
}
let Stud = new Student();
Stud.fullname = 'Debasish';
console.log(Stud.fullname);
