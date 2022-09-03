"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teacher {
    //Constractor to Assign value in Variable
    constructor(i, n, a) {
        this.streem = 'MTech-CSE';
        this.id = i;
        this.name = n;
        this.age = a;
    }
    //Methods to process the data
    getName() {
        return `The name of Teacher is ${this.name}`;
    }
    getAge() {
        return this.age + 152;
    }
    getDetails() {
        console.log(`Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`);
    }
}
class Student {
    //Constractor to Assign value in Variable
    constructor(i, n, a) {
        this.streem = 'BTech-CSE';
        this.id = i;
        this.name = n;
        this.age = a;
    }
    //Methods to process the data
    getName() {
        return `The name of Student is ${this.name}`;
    }
    getAge() {
        return this.age + 152;
    }
    getDetails() {
        console.log(`Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`);
    }
    getx() { }
}
let Student1 = new Student(1, 'Bar', 21);
Student1.getDetails();
console.log(Student1.age);
console.log(Student1.id);
console.log(Student1.name);
console.log(Student1.streem);
console.log(Student1.getName());
console.log(Student1.getAge());
//Duck type and we use this thing to Compatiable check
let Tech1 = new Teacher(2, 'Deb', 45);
let Tech2 = new Student(2, 'Deb', 45);
