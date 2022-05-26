"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_abstract_1 = __importDefault(require("./Account.abstract"));
class CheckingAccount extends Account_abstract_1.default {
    constructor(memberId, startingBalance) {
        super(memberId, startingBalance);
        this._maxWithdrawalAmount = 250;
    }
    withdraw(amount) {
        if (amount > this._maxWithdrawalAmount) {
            console.log(`You can not withdraw more than ${this._maxWithdrawalAmount} at a time!`);
            return;
        }
        if (amount > this._balance) {
            console.log('Insufficient Funds!');
            return;
        }
        this._balance -= amount;
    }
}
exports.default = CheckingAccount;
