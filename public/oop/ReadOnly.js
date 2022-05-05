"use strict";
//Readonly Modifier
class Company {
    constructor(contName) {
        this.country = 'India';
        this.name = contName;
    }
    showDetails() {
        console.log(this.name + ' : ' + this.country);
    }
}
let comp = new Company('JRA Solutions');
comp.showDetails(); // JRA Solutions : India
comp.name = 'TCS';
let empObj = {
    empCode: 1,
    empName: 'Steve',
};
empObj.empCode = 100;
let emp1 = {
    empCode1: 1,
    empName1: 'Steve',
};
emp1.empCode1 = 100; // Compiler Error: Cannot change readonly 'empCode'
emp1.empName1 = 'Bill'; // Compiler Error: Cannot change readonly 'empName'
let emp2 = {
    empCode: 1,
    empName: 'Steve',
};
emp2.empCode = 100; // OK
emp2.empName = 'Bill'; // OK
