"use strict";
//Private ->Same Class Access only
//Protected
//Public ->Any one can Access
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
}
let stud = new Student(101, 'Tanu');
console.log(`${stud.studCode} and ${stud.studName} `);
//private
class Teacher {
    constructor(code, name) {
        this.TeCode = code;
        this.TeName = name;
    }
    Display() {
        return `Code is ${this.TeCode} and ${this.TeName}`;
    }
}
let te = new Teacher(102, 'Rumana');
console.log(te.Display());
class Staff {
    constructor(code, name) {
        this.TeCode = code;
        this.TeName = name;
    }
}
class Accountent extends Staff {
    constructor(code, name, department) {
        super(code, name);
        this.dept = department;
    }
    getDetails() {
        return `code:${this.TeCode} name:${this.TeName} dept:${this.dept}`;
    }
}
let acc = new Accountent(105, 'debasish', 'Engg');
console.log(acc.getDetails());
