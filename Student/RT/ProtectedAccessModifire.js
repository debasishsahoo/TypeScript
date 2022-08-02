"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//public
class Student {
    //constructor
    constructor(roll_no, name, age, isAdult) {
        this.roll_no = roll_no;
        this.name = name;
        this.age = age;
        this.isAdult = isAdult;
    }
    //Methods
    getName() {
        return `Name; ${this.name}`;
    }
    getAge() {
        return this.age;
    }
    is_Adult() {
        return this.isAdult;
    }
    getClissified() {
        return `Age:${this.getAge()} and IsAdult:${this.is_Adult()}`;
    }
    getDetails(uid) {
        if (uid === this.roll_no) {
            return `Id:${this.roll_no} name:${this.name} age:${this.age}`;
        }
        else {
            return `Please Provide Id!`;
        }
    }
}
let s1 = new Student(100, 'Deb', 35, true);
console.log('Name:', s1.getName());
console.log('Age:', s1.getAge());
console.log('is Adult:', s1.is_Adult());
console.log('Details:', s1.getDetails(100));
console.log('Details:', s1.getClissified());
class Ritesh extends Student {
    constructor(id, name, age, isAdult, dept) {
        super(id, name, age, isAdult);
        this.Dept = dept;
    }
    getDept() {
        return `Dept:${this.Dept}`;
    }
    get_info() {
        return `Age:${this.getAge()} and ${this.is_Adult()} `;
    }
}
let R1 = new Ritesh(123, 'Ritu', 21, true, 'CS');
console.log(R1.name);
console.log(R1.getAge());
console.log(R1.is_Adult());
console.log(R1.getDept());
console.log(R1.get_info());
console.log(R1.getClissified());
console.log(R1.getDetails(123));
