"use strict";
//Private ->Same Class Access only
//Protected
//Public ->Any one can Access
Object.defineProperty(exports, "__esModule", { value: true });
class Student1 {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
}
let stud = new Student1(101, 'Debasish Sahoo');
console.log(stud.studCode + ' ' + stud.studName);
//Private
//The private access modifier cannot be accessible outside of its containing class. It ensures that the class members are visible only to that class in which it is containing.
class Student2 {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    display() {
        return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
    }
}
let student = new Student2(1, 'Debasish');
console.log(student.display());
//Protected
class Student3 {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
}
class Person extends Student3 {
    constructor(code, name, department) {
        super(code, name);
        this.department = department;
    }
    getElevatorPitch() {
        return `My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`;
    }
}
let joeRoot = new Person(1, 'Debasish Sahoo', 'CS');
console.log(joeRoot.getElevatorPitch());
