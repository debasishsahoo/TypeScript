"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person1 = getPerson();
person1.firstName = ''; //Property 'firstName' does not exist on type '{}'.
person1.lastName = ''; //Property 'lastName' does not exist on type '{}'
//Some third Party Library or some old Javascript Code
function getPerson() {
    return {};
}
//as syntax
var person2 = getPerson();
person2.firstName = ''; //OK
person2.lastName = ''; //OK
var person3 = getPerson();
person3.firstName = '';
person3.lastName = '';
//angle-bracket syntax
var person4 = getPerson();
person4.firstName = ''; //OK
person4.lastName = ''; //OK
