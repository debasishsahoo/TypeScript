import SavingsAccount from './SavingsAccount';
import CheckingAccount from './CheckingAccount';

export default class BankMember {
  private _memberId: number;
  private _name: string;

  private _savingsAccount: SavingsAccount;
  private _checkingAccount: CheckingAccount;

  public get memberId(): number {
    return this._memberId;
  }

  public get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
    this._memberId = this.generateId();
  }

  public createSavingsAccount(startingBalance: number): void {
    if (this._savingsAccount !== undefined) {
      console.log(`${this._name} already owns a savings account.`);
      return;
    }

    this._savingsAccount = new SavingsAccount(this._memberId, startingBalance);
  }

  public createCheckingAccount(startingBalance: number): void {
    if (this._checkingAccount !== undefined) {
      console.log(`${this._name} already owns a checking account.`);
      return;
    }

    this._checkingAccount = new CheckingAccount(
      this._memberId,
      startingBalance
    );
  }

  public depositToSavings(amount: number): void {
    this._savingsAccount.deposit(amount);
  }

  public withdrawFromSavings(amount): void {
    this._savingsAccount.withdraw(amount);
  }

  public getSavingsBalance(): number {
    return this._savingsAccount.balance;
  }

  public depositToChecking(amount: number): void {
    this._checkingAccount.deposit(amount);
  }

  public withdrawFromChecking(amount): void {
    this._checkingAccount.withdraw(amount);
  }

  public getCheckingBalance(): number {
    return this._checkingAccount.balance;
  }

  private generateId(): number {
    const possibilities = '1234567890';
    let generated = '';
    for (let i = 0; i < 6; i++) {
      generated += possibilities.charAt(Math.random() * possibilities.length);
    }
    return parseInt(generated);
  }
}
