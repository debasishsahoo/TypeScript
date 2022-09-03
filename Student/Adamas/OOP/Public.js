"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(i, n, a) {
        this.streem = 'BTech-CSE';
        this.id = i;
        this.name = n;
        this.age = a;
    }
    getName() {
        return `The name of Student is ${this.name}`;
    }
    //Default it is Public
    getAge() {
        return this.age + 152;
    }
    getDetails() {
        console.log(`Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`);
    }
}
let Student1 = new Student(1, 'Bar', 21);
Student1.getDetails();
console.log(Student1.age);
console.log(Student1.id);
console.log(Student1.name);
console.log(Student1.streem);
console.log(Student1.getName());
console.log(Student1.getAge());
