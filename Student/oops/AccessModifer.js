"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Public by default
class Student1 {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
}
let stud1 = new Student1(1, 'Debasish');
console.log('Student1.name:', stud1.name);
//Private
class Student2 {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
}
let stud2 = new Student2(1, 'Stokhome');
console.log('Student1.name:', stud2.name);
//Protocted
class Student3 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Person extends Student3 {
    constructor(id, name, age, dept) {
        super(id, name, age);
        this.dept = dept;
    }
    getDetails() {
        return `ID:${this.id},Name:${this.name},Age:${this.age},Dept:${this.dept}`;
    }
}
let me = new Person(1, 'Azim', 45, 'cs');
