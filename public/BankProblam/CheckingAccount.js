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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_abstract_1 = __importDefault(require("./Account.abstract"));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(memberId, startingBalance) {
        var _this = _super.call(this, memberId, startingBalance) || this;
        _this._maxWithdrawalAmount = 250;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount > this._maxWithdrawalAmount) {
            console.log("You can not withdraw more than ".concat(this._maxWithdrawalAmount, " at a time!"));
            return;
        }
        if (amount > this._balance) {
            console.log('Insufficient Funds!');
            return;
        }
        this._balance -= amount;
    };
    return CheckingAccount;
}(Account_abstract_1.default));
exports.default = CheckingAccount;
