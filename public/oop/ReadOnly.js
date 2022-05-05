"use strict";
//Readonly Modifier
var Company = /** @class */ (function () {
    function Company(contName) {
        this.country = 'India';
        this.name = contName;
    }
    Company.prototype.showDetails = function () {
        console.log(this.name + ' : ' + this.country);
    };
    return Company;
}());
var comp = new Company('JRA Solutions');
comp.showDetails(); // JRA Solutions : India
comp.name = 'TCS';
var empObj = {
    empCode: 1,
    empName: 'Steve',
};
empObj.empCode = 100;
var emp1 = {
    empCode1: 1,
    empName1: 'Steve',
};
emp1.empCode1 = 100; // Compiler Error: Cannot change readonly 'empCode'
emp1.empName1 = 'Bill'; // Compiler Error: Cannot change readonly 'empName'
var emp2 = {
    empCode: 1,
    empName: 'Steve',
};
emp2.empCode = 100; // OK
emp2.empName = 'Bill'; // OK
