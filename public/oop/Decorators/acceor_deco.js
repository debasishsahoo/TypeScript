"use strict";
// Accessor Decorators
// An Accessor Decorator is defined just before an accessor declaration. It is applied to the property descriptor for the accessor. It can be used to observe, modify, or replace an accessor's definitions.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//he expression for the accessor decorator function accepts three arguments. They are:
// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
// The Property Descriptor for the member.
class Employee {
    get salary() {
        return 'Rs. ${this._salary}';
    }
    set salary(salary) {
        this._salary = +salary;
    }
    get name() {
        return 'Sir/Madam, ${this._name}';
    }
    set name(name) {
        this._name = name;
    }
}
__decorate([
    configurable(false)
], Employee.prototype, "salary", null);
__decorate([
    configurable(true)
], Employee.prototype, "name", null);
