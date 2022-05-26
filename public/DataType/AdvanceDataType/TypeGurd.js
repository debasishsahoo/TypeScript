"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatAmount1(money) {
    let formattedAmount = 'Rs. ' + parseInt(money); //ERROR
    console.log(formattedAmount);
    return formattedAmount;
}
function formatAmount2(money) {
    let formattedAmount;
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
class Person {
    constructor() {
        this.name = '';
    }
}
class Customer extends Person {
    code() {
        console.log('Customer Code');
    }
    buy() {
        console.log('Bought');
    }
}
class SalesPerson extends Person {
    code() {
        console.log('SalesPerson Code');
    }
    sell() {
        console.log('Sold');
    }
}
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
const car = {
    make: 'Honda',
    start() { },
};
if ('start' in car) {
    console.log('Exists'); //True
}
else {
    console.log('Not Exists');
}
class Customer1 extends Person {
    code() {
        console.log('Customer Code');
    }
    buy() {
        console.log('Bought');
    }
}
class SalesPerson1 extends Person {
    code() {
        console.log('SalesPerson Code');
    }
    sell() {
        console.log('Sold');
    }
}
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
