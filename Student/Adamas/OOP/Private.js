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
    getAge() {
        return this.age + 152;
    }
    getDetails() {
        console.log(`Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`);
    }
    //Inside of the Class
    getAllDetails() {
        console.log(`Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`);
        console.log(this.getName());
        this.getDetails();
    }
}
let Student1 = new Student(1, 'Bar', 21);
//Out side of the Class i can not Acess private properties
// Student1.getDetails();
// console.log(Student1.age);
// console.log(Student1.id);
// console.log(Student1.name);
// console.log(Student1.streem);
// console.log(Student1.getName());
// console.log(Student1.getAge());
Student1.getAllDetails();
class Srabon extends Student {
    constructor(i, n, a) {
        super(i, n, a);
    }
    getRavi() {
        super.getName();
    }
}
let x = new Srabon(1, 'Srabon', 21);
console.log(x.id);
console.log(x.getName());
