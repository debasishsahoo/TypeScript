"use strict";
// implementing the interface
class Employee {
    constructor(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    FullName() {
        return this.firstName + ' ' + this.lastName;
    }
    GetAge() {
        return this.age;
    }
}
// using the class that implements interface
let myEmployee = new Employee('Abhishek', 'Mishra', 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log('Name of Person: ' + fullName + '\nAge: ' + Age);
