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
function formatAmount1(money) {
    var formattedAmount = 'Rs. ' + parseInt(money); //ERROR
    console.log(formattedAmount);
    return formattedAmount;
}
function formatAmount2(money) {
    var formattedAmount;
    if (typeof money == 'string') {
        formattedAmount = 'Rs. ' + parseInt(money);
    }
    else {
        formattedAmount = 'Rs. ' + money;
    }
    console.log(formattedAmount);
    return formattedAmount;
}
//InstanceOf Type Guard
var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
    }
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.code = function () {
        console.log('Customer Code');
    };
    Customer.prototype.buy = function () {
        console.log('Bought');
    };
    return Customer;
}(Person));
var SalesPerson = /** @class */ (function (_super) {
    __extends(SalesPerson, _super);
    function SalesPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesPerson.prototype.code = function () {
        console.log('SalesPerson Code');
    };
    SalesPerson.prototype.sell = function () {
        console.log('Sold');
    };
    return SalesPerson;
}(Person));
function getCode1(obj) {
    obj.code(); //Property 'code' does not exist on type 'Person'
}
getCode(new Customer());
function getCode2(obj) {
    if (obj instanceof Customer) {
        obj.code();
    }
    else if (obj instanceof SalesPerson) {
        obj.code();
    }
}
getCode2(new Customer()); //Customer Code
getCode2(new SalesPerson()); //SalesPerson Code
//In Operator
var car = {
    make: 'Honda',
    start: function () { },
};
if ('start' in car) {
    console.log('Exists'); //True
}
else {
    console.log('Not Exists');
}
var Customer1 = /** @class */ (function (_super) {
    __extends(Customer1, _super);
    function Customer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer1.prototype.code = function () {
        console.log('Customer Code');
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
        console.log('SalesPerson Code');
    };
    SalesPerson1.prototype.sell = function () {
        console.log('Sold');
    };
    return SalesPerson1;
}(Person));
function getCode3(obj) {
    if ('buy' in obj) {
        obj.buy();
    }
    else if ('sell' in obj) {
        obj.sell();
    }
}
getCode3(new Customer()); //Bought
getCode3(new SalesPerson()); //Sold
//Custom Type Guard / Type Predicates
function IsCustomer(obj) {
    //You can write your own logic here to determine if the obj is customer
    //return true if yes else false
    return obj.buy != undefined;
    //if ("buy" in obj) return true;
    //return false;
}
function getCode(obj) {
    if (IsCustomer(obj)) {
        obj.buy();
    }
    else {
        obj.sell();
    }
}
getCode(new Customer()); //Customer Code
getCode(new SalesPerson()); //SalesPerson Code
