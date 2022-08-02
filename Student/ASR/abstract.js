"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dept {
    constructor(deptname) {
        this.deptname = deptname;
    }
    printName() {
        console.log(`Dept name: ${this.deptname}`);
    }
}
class Accounts extends Dept {
    constructor() {
        super('Account and Audit Dept');
    }
    printMeeting() {
        console.log('Accounts Dept Meeting on 10:00 AM');
    }
    ReprtSubmit() {
        console.log('Accounts Dept Report Submit on 1:00 PM');
    }
}
class Education extends Dept {
    constructor() {
        super('Education and School Dept');
    }
    printMeeting() {
        console.log('Education Dept Meeting on 12:00 PM');
    }
    ReprtSubmit() {
        console.log('Education Dept Report Submit on 3:00 PM');
    }
}
let Department;
Department = new Accounts();
Department.printName();
Department.printMeeting();
Department.ReprtSubmit();
Department = new Education();
Department.printName();
Department.printMeeting();
Department.ReprtSubmit();
