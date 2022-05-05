"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(memberId, startingBalance) {
        this._memberId = memberId;
        this._balance = startingBalance;
    }
    Object.defineProperty(Account.prototype, "memberId", {
        get: function () {
            return this._memberId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    return Account;
}());
exports.default = Account;
