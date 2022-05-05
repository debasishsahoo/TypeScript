"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateableMixin = exports.DisposableMixin = void 0;
function DisposableMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.IDisposable = false;
            return _this;
        }
        class_1.prototype.Disposed = function () {
            this.IDisposable = true;
        };
        return class_1;
    }(base));
}
exports.DisposableMixin = DisposableMixin;
function ActivateableMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.IActivateble = false;
            return _this;
        }
        class_2.prototype.Activate = function () {
            this.IDisposable = true;
        };
        class_2.prototype.Dectivate = function () {
            this.IDisposable = false;
        };
        return class_2;
    }(base));
}
exports.ActivateableMixin = ActivateableMixin;
