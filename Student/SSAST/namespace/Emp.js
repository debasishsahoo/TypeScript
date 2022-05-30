"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
/// <reference path = "./StringUtil.ts"
class Emp {
    constructor(ID, NAME) {
        this.id = StringUtility.ToY(ID);
        this.name = StringUtility.ToX(NAME);
    }
    details() {
        console.log(`EmpID:${this.id}
     EmpNAME:${this.name}`);
    }
}
exports.Emp = Emp;
const E = new Emp('ABC', 'deb');
E.details();
