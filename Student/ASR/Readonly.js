"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(contName) {
        this.country = 'India';
        this.name = contName;
    }
    showDetails() {
        console.log(`${this.country} : ${this.name}`);
    }
}
let comp = new Company('JRA SOL');
comp.name = 'TCS';
comp.country = 'USA';
comp.showDetails();
