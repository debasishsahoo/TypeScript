"use strict";
//Private ->only acess by its own Classe
//Public ->Any one Can Acess
//Protected->only Acess by its own class or subclass
Object.defineProperty(exports, "__esModule", { value: true });
//Public
class Student1 {
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
const StudentOBJ1 = new Student1(1, 'Debasish', 1522222);
console.log(StudentOBJ1.getName());
console.log(StudentOBJ1.getSalary());
console.log(StudentOBJ1.getDetails());
//Private
class Student2 {
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
const StudentOBJ2 = new Student2(1, 'Debasish', 1522222);
console.log(StudentOBJ2.getName());
console.log(StudentOBJ2.getSalary());
console.log(StudentOBJ2.getDetails());
//Protected
class Student3 {
    //Constructor(2)
    constructor(ID, NAME, SALARY) {
        this.id = ID;
        this.name = NAME;
        this.Salary = SALARY;
    }
}
class Person extends Student3 {
    constructor(ID, NAME, SALARY, DEPT) {
        super(ID, NAME, SALARY);
        this.department = DEPT;
    }
    getDetails() {
        return `ID:${this.id}, NAME:${this.name},
     SALARY:${this.Salary} and DEPT:${this.department}`;
    }
}
