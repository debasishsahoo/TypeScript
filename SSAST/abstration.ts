export {};
abstract class Dept {
  constructor(public name: string) {}

  //Non-Abstract Method
  printName(): void {
    console.log(`Dept:${this.name}`);
  }

  //Abstract Method
  abstract printMetting(): void;
}

class Accounting extends Dept {
  constructor() {
    super('Accounts Dept');
  }
  printMetting(): void {
    console.log(`Metting For Accounts Dept`);
  }
}
let dept: Dept;
dept = new Accounting();

dept.printName();
dept.printMetting();

let dept1: Accounting;
dept1 = new Dept();
