"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dept {
    constructor(name) {
        this.name = name;
    }
    //Non-Abstract Method
    printName() {
        console.log(`Dept:${this.name}`);
    }
}
class Accounting extends Dept {
    constructor() {
        super('Accounts Dept');
    }
    printMetting() {
        console.log(`Metting For Accounts Dept`);
    }
}
let dept;
dept = new Accounting();
dept.printName();
dept.printMetting();
let dept1;
dept1 = new Dept();
