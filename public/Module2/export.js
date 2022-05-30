"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complayname = exports.Emp = exports.age = void 0;
exports.age = 35; // Variable
class Emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    displayEmp() {
        console.log(`id:${this.id} and Name:${this.name}`);
    }
}
exports.Emp = Emp;
exports.complayname = 'DeVSol'; //variable
