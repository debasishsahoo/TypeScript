export {};
class Car {
  color: String;
  constructor(c: string) {
    this.color = c;
  }
}

class Audi extends Car {
  Price: number;
  constructor(c: string, p: number) {
    super(c);
    this.Price = p;
  }
  display() {
    console.log(`Color of Audi Car is ${this.color}`);
    console.log(`Price of Audi Car is ${this.Price}`);
    return `${this.color} and ${this.Price}`;
  }
}

let obj: Audi = new Audi('Black', 850000000);
obj.display();

class A2 extends Audi {
  Engine: string;
  Safty: boolean;
  constructor(c: string, p: number, e: string, s: boolean) {
    super(c, p);
    this.Engine = e;
    this.Safty = s;
  }
  display() {
    console.log(`Engin of Audi Car is ${this.Engine}`);
    console.log(`Safty of Audi Car is ${this.Safty}`);
    return `${this.Engine} and ${this.Safty}`;
  }
}

let a2: A2 = new A2('Black', 900000000, 'V12', true);

console.log(a2.display());
