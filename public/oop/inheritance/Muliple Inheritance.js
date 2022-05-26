"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mixin_1 = require("./Mixin");
class Disposable {
    constructor() {
        this.IDisposable = false;
    }
    Disposed() {
        this.IDisposable = true;
    }
}
class Activateable {
    constructor() {
        this.IActivateble = false;
    }
    Activate() {
        this.IActivateble = true;
    }
    Dectivate() {
        this.IActivateble = false;
    }
}
const Employee = (0, Mixin_1.DisposableMixin)((0, Mixin_1.ActivateableMixin)(class {
}));
const example = new Employee();
function takeExample(Ex) { }
