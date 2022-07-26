"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = exports.company = exports.age = void 0;
exports.age = 35;
exports.company = 'DEVSOL';
class Emp {
    constructor(x, y) {
        this.id = x;
        this.name = y;
    }
    display() {
        console.log(`id:${this.id} and name:${this.name}`);
    }
}
exports.Emp = Emp;
