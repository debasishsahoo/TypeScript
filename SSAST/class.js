"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    //Constructor(2)
    constructor(ID, NAME, SALARY) {
        this.id = ID;
        this.name = NAME;
        this.Salary = SALARY;
    }
    //METHOD(3)
    getName() {
        return `Name: ${this.name}`;
    }
    getSalary() {
        return `Salary:${this.Salary}`;
    }
    getDetails() {
        return `Name: ${this.name} and ID:${this.id}`;
    }
}
const StudentOBJ = new Student(1, 'Debasish', 1522222);
console.log(StudentOBJ.getName());
console.log(StudentOBJ.getSalary());
console.log(StudentOBJ.getDetails());
