"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(memberId, startingBalance) {
        this._memberId = memberId;
        this._balance = startingBalance;
    }
    get memberId() {
        return this._memberId;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
}
exports.default = Account;
