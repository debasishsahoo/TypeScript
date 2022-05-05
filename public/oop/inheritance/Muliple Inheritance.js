"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mixin_1 = require("./Mixin");
var Disposable = /** @class */ (function () {
    function Disposable() {
        this.IDisposable = false;
    }
    Disposable.prototype.Disposed = function () {
        this.IDisposable = true;
    };
    return Disposable;
}());
var Activateable = /** @class */ (function () {
    function Activateable() {
        this.IActivateble = false;
    }
    Activateable.prototype.Activate = function () {
        this.IActivateble = true;
    };
    Activateable.prototype.Dectivate = function () {
        this.IActivateble = false;
    };
    return Activateable;
}());
var Employee = (0, Mixin_1.DisposableMixin)((0, Mixin_1.ActivateableMixin)(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}())));
var example = new Employee();
function takeExample(Ex) { }
