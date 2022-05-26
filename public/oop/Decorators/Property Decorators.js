"use strict";
// A property decorator is defined just before a property declaration. It is similar to the method decorators. The only difference between property decorators and method decorators is that they do not accept property descriptor as an argument and do not return anything.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// The expression for the property decorator function accepts two arguments. They are:
// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
class Company {
    constructor() {
        this.name = 'google.com';
    }
}
__decorate([
    ReadOnly
], Company.prototype, "name", void 0);
let comp = new Company();
comp.name = 'SSSIT.com'; // Here, we can't change company name.
console.log(comp.name); // 'google.com'
