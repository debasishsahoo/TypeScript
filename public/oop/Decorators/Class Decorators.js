"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Class Decorators
//A class decorator is defined just before the class declaration, and it tells about the class behaviors. A class decorator is applied to the constructor of the class. A class decorator can be used to observe, modify, or replace a class definition. If the class decorator returns a value, it will replace the class declaration with the given constructor function.
let Person = class Person {
    constructor(message) {
        this.msg = message;
    }
    show() {
        return 'Hello, ' + this.msg;
    }
};
Person = __decorate([
    sealed
], Person);
