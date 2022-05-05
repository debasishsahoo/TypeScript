export default abstract class Account {
  protected _memberId: number;
  protected _balance: number;

  public get memberId(): number {
    return this._memberId;
  }

  public get balance(): number {
    return this._balance;
  }

  constructor(memberId: number, startingBalance: number) {
    this._memberId = memberId;
    this._balance = startingBalance;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public abstract withdraw(amount: number): void;
}
