"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SavingsAccount_1 = __importDefault(require("./SavingsAccount"));
const CheckingAccount_1 = __importDefault(require("./CheckingAccount"));
class BankMember {
    constructor(name) {
        this._name = name;
        this._memberId = this.generateId();
    }
    get memberId() {
        return this._memberId;
    }
    get name() {
        return this._name;
    }
    createSavingsAccount(startingBalance) {
        if (this._savingsAccount !== undefined) {
            console.log(`${this._name} already owns a savings account.`);
            return;
        }
        this._savingsAccount = new SavingsAccount_1.default(this._memberId, startingBalance);
    }
    createCheckingAccount(startingBalance) {
        if (this._checkingAccount !== undefined) {
            console.log(`${this._name} already owns a checking account.`);
            return;
        }
        this._checkingAccount = new CheckingAccount_1.default(this._memberId, startingBalance);
    }
    depositToSavings(amount) {
        this._savingsAccount.deposit(amount);
    }
    withdrawFromSavings(amount) {
        this._savingsAccount.withdraw(amount);
    }
    getSavingsBalance() {
        return this._savingsAccount.balance;
    }
    depositToChecking(amount) {
        this._checkingAccount.deposit(amount);
    }
    withdrawFromChecking(amount) {
        this._checkingAccount.withdraw(amount);
    }
    getCheckingBalance() {
        return this._checkingAccount.balance;
    }
    generateId() {
        const possibilities = '1234567890';
        let generated = '';
        for (let i = 0; i < 6; i++) {
            generated += possibilities.charAt(Math.random() * possibilities.length);
        }
        return parseInt(generated);
    }
}
exports.default = BankMember;
