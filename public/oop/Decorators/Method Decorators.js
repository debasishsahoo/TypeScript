"use strict";
//A Method Decorator is defined just before a method declaration. It is applied to a property descriptor for the method. It can be used to observe, modify, or replace a method definition. We cannot use method decorator in a declaration file.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// The expression for the method decorator function accepts three arguments. They are:
// Either the constructor function of the class for a static member or the prototype of the class for an instance member.
// The member name.
// The Property Descriptor for the member.
var Item = /** @class */ (function () {
    function Item() {
        this.itemArr = [];
    }
    Item.prototype.Add = function (item) {
        this.itemArr.push(item);
    };
    Item.prototype.GetAll = function () {
        return this.itemArr;
    };
    __decorate([
        log
    ], Item.prototype, "Add", null);
    return Item;
}());
