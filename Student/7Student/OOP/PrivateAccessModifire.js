"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(x, y) {
        this.id = x;
        this.name = y;
    }
    getName() {
        return this.name;
    }
}
let Stud = new Student(1, 'Amit');
console.log(Stud.id);
console.log(Stud.getName());
class Indronil extends Student {
    constructor(x, y, z) {
        super(x, y);
        this.dept = z;
    }
    getDetails() {
        return `id:${this.id} and ${this.name} and Dept:${this.dept} `;
    }
}
