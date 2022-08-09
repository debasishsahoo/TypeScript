"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.name = '';
    }
}
class Lady {
    constructor() {
        this.name = '';
        this.age = 0;
    }
}
let Amit = new Person();
//object Override Isssu
//Amit = new Lady();
console.log(Amit instanceof Person);
console.log(Amit instanceof Lady);
console.log(Amit instanceof Object);
let arr = [1, 2, 3, 4];
console.log(arr instanceof Array);
let REGX = new RegExp('/abcv/');
console.log(REGX instanceof RegExp);
let abc = function abc() { };
console.log(abc instanceof Object);
//It will Work on Object only not Primitive Datatype
let a = 5;
let b = 'a';
let c = true;
//console.log(a instanceof number);
//console.log(b instanceof string);
//console.log(c instanceof boolean);
class Employee extends Person {
}
class Customer extends Person {
}
class SelesPerson extends Employee {
}
let Emp = new Employee();
let Cust = new Customer();
let Sales = new SelesPerson();
if (Amit instanceof Person) {
    console.log(`Amint==Person`);
}
if (Amit instanceof Employee) {
    console.log(`Amint==Employee`);
}
if (Amit instanceof Customer) {
    console.log(`Amint==Employee`);
}
if (Amit instanceof SelesPerson) {
    console.log(`Amint==Employee`);
}
if (Emp instanceof Person) {
    console.log(`Emp==Person`);
}
if (Emp instanceof Employee) {
    console.log(`Emp==Employee`);
}
if (Emp instanceof Customer) {
    console.log(`Emp==Employee`);
}
if (Emp instanceof SelesPerson) {
    console.log(`Emp==Employee`);
}
if (Sales instanceof Person) {
    console.log(`Sales==Person`);
}
if (Sales instanceof Employee) {
    console.log(`Sales==Employee`);
}
if (Sales instanceof Customer) {
    console.log(`Sales==Customer`);
}
if (Sales instanceof SelesPerson) {
    console.log(`Sales==SelesPerson`);
}
