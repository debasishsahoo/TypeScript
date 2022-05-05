import Account from './Account.abstract';

export default class SavingsAccount extends Account {
  private _percentInterestGrowth: number;
  private _maxMonthlyWithdrawals: number;
  private _currentMonthlyWithdrawls: number;

  constructor(memberId: number, startingBalance: number) {
    super(memberId, startingBalance);
    this._percentInterestGrowth = 3;
    this._maxMonthlyWithdrawals = 3;
    this._currentMonthlyWithdrawls = 0;
  }

  public addMonthlyInterestGrowth(): void {
    this._balance += this._balance * (this._percentInterestGrowth / 100);
  }

  public withdraw(amount: number): void {
    if (this._currentMonthlyWithdrawls === this._maxMonthlyWithdrawals) {
      console.log(
        `Max monthly withdrawal limit has been reached, Please wait until next month.`
      );
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
