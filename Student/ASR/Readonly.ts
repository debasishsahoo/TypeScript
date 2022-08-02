export {};

class Company {
  readonly country: string = 'India';
  readonly name: string;

  constructor(contName: string) {
    this.name = contName;
  }
  showDetails() {
    console.log(`${this.country} : ${this.name}`);
  }
}

let comp = new Company('JRA SOL');
comp.name = 'TCS';
comp.country = 'USA';
comp.showDetails();
