"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_abstract_1 = __importDefault(require("./Account.abstract"));
class SavingsAccount extends Account_abstract_1.default {
    constructor(memberId, startingBalance) {
        super(memberId, startingBalance);
        this._percentInterestGrowth = 3;
        this._maxMonthlyWithdrawals = 3;
        this._currentMonthlyWithdrawls = 0;
    }
    addMonthlyInterestGrowth() {
        this._balance += this._balance * (this._percentInterestGrowth / 100);
    }
    withdraw(amount) {
        if (this._currentMonthlyWithdrawls === this._maxMonthlyWithdrawals) {
            console.log(`Max monthly withdrawal limit has been reached, Please wait until next month.`);
            return;
        }
        if (amount > this._balance) {
            console.log(`Insufficient funds!`);
            return;
        }
        this._balance -= amount;
        this._currentMonthlyWithdrawls++;
    }
}
exports.default = SavingsAccount;
