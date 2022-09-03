"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Depterment {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    printName() {
        console.log(`Deprtment name:${this.name}`);
    }
    printType() {
        console.log(`Deprtment Type:${this.type}`);
    }
}
class CSE extends Depterment {
    constructor() {
        super('CSE', 'ENGG');
    }
    YEAR() {
        console.log('4');
    }
    getSem() {
        console.log(`The Sem is 8`);
    }
}
class BSC extends Depterment {
    constructor() {
        super('BSE', 'ENGG');
    }
    YEAR() {
        console.log('3');
    }
    getYear() {
        console.log(`The Year is 3`);
    }
}
let dept;
dept = new CSE();
dept.printName();
dept.printType();
dept.YEAR();
// class ECE extends Depterment {
//   constructor() {
//     super(' ece', 'ENGG');
//   }
//   Year(): void {
//     console.log('4');
//   }
// }
// class EE extends Depterment {
//   constructor() {
//     super('EE', 'ENGG');
//   }
//   YEAR(): void {
//     console.log('4');
//   }
// }
// class ME extends Depterment {
//   constructor() {
//     super('ME', 'ENGG');
//   }
//   YEAR(): void {
//     console.log('4');
//   }
// }
// class CE extends Depterment {
//   constructor() {
//     super('CE', 'ENGG');
//   }
//   YEAR(): void {
//     console.log('4');
//   }
// }
// class BT extends Depterment {
//   constructor() {
//     super('BT', 'ENGG');
//   }
//   YEAR(): void {
//     console.log('4');
//   }
// }
// class LAW extends Depterment {
//   constructor() {
//     super('LAW', 'ENGG');
//   }
//   YEAR(): void {
//     console.log('5');
//   }
// }
// class BSC extends Depterment {
//   constructor() {
//     super('BSE', 'ENGG');
//   }
//   YEAR(): void {
//     console.log('3');
//   }
// }
