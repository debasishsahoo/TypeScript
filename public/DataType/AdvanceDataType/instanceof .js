"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
    }
    return Person;
}());
var person = new Person();
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
var arr = [1, 2, 3];
console.log(arr instanceof Array); // true
var reg = new RegExp('/abc/');
console.log(reg instanceof RegExp); // true
var abc = function abc() { };
console.log(abc instanceof Object); // true
console.log(abc instanceof Function); // true
//But it will not work on primitive types. It will result in both compile-time and run-time errors.
var numVar = 3;
var strVar = 'Hello';
var boolVar = true;
//console.log(numVar instanceof number); //Error
//console.log(strVar instanceof string); //Error
//console.log(boolVar instanceof boolean); //Error
//The left-hand side of an ‘instanceof’ expression must be of type ‘any’, an object type, or a type parameter.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Customer;
}(Person));
var SalesPerson = /** @class */ (function (_super) {
    __extends(SalesPerson, _super);
    function SalesPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SalesPerson;
}(Employee));
var employee = new Employee();
var customer = new Customer();
var salesPerson = new SalesPerson();
if (person instanceof Person)
    console.log('person == Person'); //True
if (person instanceof Employee)
    console.log('person == Employee');
if (person instanceof Customer)
    console.log('person == Customer');
if (person instanceof SalesPerson)
    console.log('person == SalesPerson');
if (employee instanceof Person)
    console.log('employee == Person'); //True
if (employee instanceof Employee)
    console.log('employee == Employee'); //True
if (employee instanceof Customer)
    console.log('employee == Customer');
if (employee instanceof SalesPerson)
    console.log('employee == SalesPerson');
if (customer instanceof Person)
    console.log('customer == Person'); //True
if (customer instanceof Employee)
    console.log('customer == Employee');
if (customer instanceof Customer)
    console.log('customer == Customer'); //True
if (customer instanceof SalesPerson)
    console.log('customer == SalesPerson');
if (salesPerson instanceof Person)
    console.log('salesPerson == Person'); //True
if (salesPerson instanceof Employee)
    console.log('salesPerson == Employee'); //True
if (salesPerson instanceof Customer)
    console.log('salesPerson == Customer');
if (salesPerson instanceof SalesPerson)
    console.log('salesPerson == SalesPerson'); //True
//InstanceOf As Type Guard
var Customer1 = /** @class */ (function (_super) {
    __extends(Customer1, _super);
    function Customer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer1.prototype.code = function () {
        console.log('Customer1 Code');
    };
    Customer1.prototype.buy = function () {
        console.log('Bought');
    };
    return Customer1;
}(Person));
var SalesPerson1 = /** @class */ (function (_super) {
    __extends(SalesPerson1, _super);
    function SalesPerson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesPerson1.prototype.code = function () {
        console.log('SalesPerson1 Code');
    };
    SalesPerson1.prototype.sell = function () {
        console.log('Sold');
    };
    return SalesPerson1;
}(Person));
function getCode1(obj) {
    obj.code(); //Property 'code' does not exist on type 'Person'
}
function getCode2(obj) {
    obj.code();
}
function getCode3(obj) {
    if (obj instanceof Customer) {
        obj.code();
    }
    else if (obj instanceof SalesPerson) {
        obj.code();
    }
}
function BuySell1(obj) {
    if (obj instanceof Customer) {
        obj.buy();
    }
    else if (obj instanceof SalesPerson) {
        obj.sell();
    }
}
function BuySell2(obj) {
    obj.code(); //Property 'code' does not exist on type 'Person'
    if (obj instanceof Customer) {
        obj.sell(); //Property 'sell' does not exist on type 'Customer'
    }
    else if (obj instanceof SalesPerson) {
        obj.buy(); //Property 'buy' does not exist on type 'SalesPerson'
    }
}
getCode1(new Customer());
getCode2(new Customer());
getCode3(new Customer()); //Customer Code
getCode3(new SalesPerson()); //SalesPerson Code
BuySell1(new Customer());
BuySell1(new SalesPerson());
BuySell2(new Customer());
BuySell2(new SalesPerson());
