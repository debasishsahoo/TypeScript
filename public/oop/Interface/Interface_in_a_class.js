"use strict";
// implementing the interface
var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Employee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Employee.prototype.GetAge = function () {
        return this.age;
    };
    return Employee;
}());
// using the class that implements interface
var myEmployee = new Employee('Abhishek', 'Mishra', 25);
var fullName = myEmployee.FullName();
var Age = myEmployee.GetAge();
console.log('Name of Person: ' + fullName + '\nAge: ' + Age);
