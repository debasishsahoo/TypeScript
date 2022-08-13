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

class BMW extends Car {
  Price: number;
  constructor(c: string, p: number) {
    super(c);
    this.Price = p;
  }
  display() {
    console.log(`Color of BMW Car is ${this.color}`);
    console.log(`Price of BMW Car is ${this.Price}`);
    return `${this.color} and ${this.Price}`;
  }
}

class Mercedes extends Car {
  Price: number;
  constructor(c: string, p: number) {
    super(c);
    this.Price = p;
  }
  display() {
    console.log(`Color of BMW Car is ${this.color}`);
    console.log(`Price of BMW Car is ${this.Price}`);
    return `${this.color} and ${this.Price}`;
  }
}
