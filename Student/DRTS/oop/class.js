"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    //constructor
    constructor(x, y) {
        this.id = x;
        this.name = y;
    }
    //methods
    getName() {
        return `Name:${this.name}`;
    }
    getDetails(id) {
        if (id !== null) {
            return `ID:${this.id} and Name:${this.name}`;
        }
        else {
            return `Please Send Any Id`;
        }
    }
}
const Obj1 = new Student(1, 'Tanu');
const Obj2 = new Student(2, 'Ruma');
console.log('Obj1:', Obj1);
console.log('Obj2:', Obj2);
console.log('Obj1:', Obj1.getName());
console.log('Obj2:', Obj2.getDetails(2));
