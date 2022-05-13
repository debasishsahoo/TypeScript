"use strict";
//An enum is a spcial "Class" that represent a group of 'CONSTANTS'(UNCHANGEBLE VARIABLE)
// LIKE final variables.
Object.defineProperty(exports, "__esModule", { value: true });
var students;
(function (students) {
    students[students["azim"] = 1] = "azim";
    students[students["anjani"] = 2] = "anjani";
    students[students["reshmi"] = 3] = "reshmi";
    students[students["dinda"] = 4] = "dinda";
})(students || (students = {}));
var BasicSalary;
(function (BasicSalary) {
    BasicSalary[BasicSalary["CEO"] = 100000] = "CEO";
    BasicSalary[BasicSalary["CTO"] = 95000] = "CTO";
    BasicSalary[BasicSalary["MANAGER"] = 85000] = "MANAGER";
    BasicSalary[BasicSalary["SUPERVISOR"] = 60000] = "SUPERVISOR";
    BasicSalary[BasicSalary["TEAMLEAD"] = 45000] = "TEAMLEAD";
    BasicSalary[BasicSalary["PROJECTLEAD"] = 30000] = "PROJECTLEAD";
    BasicSalary[BasicSalary["PROGRAMMER"] = 15000] = "PROGRAMMER";
})(BasicSalary || (BasicSalary = {}));
var Emp1;
console.log(BasicSalary.CEO);
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.Monday);
console.log(Weekdays['Monday']);
console.log(Weekdays['1']);
