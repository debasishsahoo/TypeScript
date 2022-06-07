"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateableMixin = exports.DisposableMixin = void 0;
function DisposableMixin(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.IDisposable = false;
        }
        Disposed() {
            this.IDisposable = true;
        }
    };
}
exports.DisposableMixin = DisposableMixin;
function ActivateableMixin(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.IActivateble = false;
        }
        Activateable() {
            this.IDisposable = true;
        }
        Dectivate() {
            this.IDisposable = false;
        }
    };
}
exports.ActivateableMixin = ActivateableMixin;
