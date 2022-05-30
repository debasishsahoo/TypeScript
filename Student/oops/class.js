"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    //hear Properties is not init delault
    // using  constructor key Word
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    //methods
    getName() {
        return `Name:${this.name}`;
    }
    getDetails() {
        return `Id:${this.id},Name:${this.name}`;
    }
}
const StudentObj = new Student(1, 'Dinda');
StudentObj.getName();
console.log(StudentObj.getName());
console.log(StudentObj.getDetails());
