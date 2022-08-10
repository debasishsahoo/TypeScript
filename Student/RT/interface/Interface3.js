"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    constructor(f, l, a) {
        this.fn = f;
        this.ln = l;
        this.age = a;
    }
    Fullname() {
        return `${this.fn} ${this.ln}`;
    }
    GetAge() {
        return this.age;
    }
    Details() {
        console.log(`Name:${this.fn} ${this.ln} and age:${this.age}`);
    }
    xyz() {
        console.log('hi');
    }
}
