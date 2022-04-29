"use strict";
class EnggStudent {
    //Constructor
    constructor(ID, NAME, DEPT, YEAR) {
        this.id = ID;
        this.name = NAME;
        this.dept = DEPT;
        this.year = YEAR;
    }
    //Method
    GetYear() {
        return this.year;
    }
    GetIDNAME() {
        return `ID: ${this.id} and Name: ${this.name}`;
    }
}
const obj = new EnggStudent(1, 'Abdul', 'CS', 2022);
console.log('obj:', obj);
console.log('YEAR:', obj.GetYear());
