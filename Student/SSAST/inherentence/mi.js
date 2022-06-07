"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixin_1 = require("./mixin");
class Disposable {
    constructor() {
        this.IDisposable = false;
    }
    Disposed() {
        this.IDisposable = true;
    }
}
class Activatele {
    constructor() {
        this.IActivateble = false;
    }
    Activateable() {
        this.IActivateble = true;
    }
    Dectivate() {
        this.IActivateble = false;
    }
}
const Emp = (0, mixin_1.DisposableMixin)((0, mixin_1.ActivateableMixin)(class {
}));
const expl = new Emp();
