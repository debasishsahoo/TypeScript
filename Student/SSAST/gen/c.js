"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics Class
class StudentInfo {
    constructor(id, name) {
        this.Id = id;
        this.Name = name;
    }
    getValue() {
        console.log(`Id:${this.Id},Name:${this.Name}`);
    }
}
let st1 = new StudentInfo(100, 'deb');
let st2 = new StudentInfo(true, 'deb');
let st3 = new StudentInfo(false, true);
let st4 = new StudentInfo('a1', 'sahoo');
function printname(x) {
    console.log(`${x.name},${x.age},${x.profession}`);
}
let player = {
    name: 'Debasish',
    age: 30,
    profession: 'Coding',
};
printname(player);
