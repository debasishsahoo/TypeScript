"use strict";
// Parameter Decorators
// A parameter decorator is defined just before a parameter declaration. It is applied to the function for a class constructor or method declaration. It cannot be used in a declaration file or in any other ambient context (such as in a declared class).
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// The expression for the parameter decorator function accepts three arguments. They are:
// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
// The index of the parameter in the function?s arguments list.
var Person = /** @class */ (function () {
    function Person(message) {
        this.msg = message;
    }
    Person.prototype.show = function (name) {
        return 'Hello ' + name + ', ' + this.msg;
    };
    __decorate([
        validate,
        __param(0, required)
    ], Person.prototype, "show", null);
    return Person;
}());
