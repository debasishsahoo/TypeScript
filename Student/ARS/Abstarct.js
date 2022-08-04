"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class dept {
    constructor(name) {
        this.name = name;
    }
    printname() {
        console.log(this.name);
    }
}
class CSE extends dept {
    constructor() {
        super('CSE');
    }
    currentsem() {
        console.log('8th');
    }
    currentyear() {
        console.log('4th');
    }
}
class ECE extends dept {
    constructor() {
        super('electronic');
    }
    currentsem() {
        console.log('5th');
    }
    currentyear() {
        console.log('3th');
    }
}
class EE extends dept {
    constructor() {
        super('EE');
    }
    currentsem() {
        console.log('1th');
    }
    currentyear() {
        console.log('1th');
    }
}
class ME extends dept {
    constructor() {
        super('ME');
    }
    currentsem() {
        console.log('6th');
    }
    currentyear() {
        console.log('3th');
    }
}
class CE extends dept {
    constructor() {
        super('CE');
    }
    currentsem() {
        console.log('4th');
    }
    currentyear() {
        console.log('2th');
    }
}
let Department;
Department = new CSE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();
Department = new CE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();
Department = new EE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();
Department = new ECE();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();
Department = new ME();
console.log('Department.name:', Department.name);
Department.printname();
Department.currentsem();
