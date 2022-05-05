"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount_1 = __importDefault(require("./SavingsAccount"));
var CheckingAccount_1 = __importDefault(require("./CheckingAccount"));
var BankMember = /** @class */ (function () {
    function BankMember(name) {
        this._name = name;
        this._memberId = this.generateId();
    }
    Object.defineProperty(BankMember.prototype, "memberId", {
        get: function () {
            return this._memberId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankMember.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    BankMember.prototype.createSavingsAccount = function (startingBalance) {
        if (this._savingsAccount !== undefined) {
            console.log("".concat(this._name, " already owns a savings account."));
            return;
        }
        this._savingsAccount = new SavingsAccount_1.default(this._memberId, startingBalance);
    };
    BankMember.prototype.createCheckingAccount = function (startingBalance) {
        if (this._checkingAccount !== undefined) {
            console.log("".concat(this._name, " already owns a checking account."));
            return;
        }
        this._checkingAccount = new CheckingAccount_1.default(this._memberId, startingBalance);
    };
    BankMember.prototype.depositToSavings = function (amount) {
        this._savingsAccount.deposit(amount);
    };
    BankMember.prototype.withdrawFromSavings = function (amount) {
        this._savingsAccount.withdraw(amount);
    };
    BankMember.prototype.getSavingsBalance = function () {
        return this._savingsAccount.balance;
    };
    BankMember.prototype.depositToChecking = function (amount) {
        this._checkingAccount.deposit(amount);
    };
    BankMember.prototype.withdrawFromChecking = function (amount) {
        this._checkingAccount.withdraw(amount);
    };
    BankMember.prototype.getCheckingBalance = function () {
        return this._checkingAccount.balance;
    };
    BankMember.prototype.generateId = function () {
        var possibilities = '1234567890';
        var generated = '';
        for (var i_1 = 0; i_1 < 6; i_1++) {
            generated += possibilities.charAt(Math.random() * possibilities.length);
        }
        return parseInt(generated);
    };
    return BankMember;
}());
exports.default = BankMember;
