export {};

interface Iperson {
  fn: string;
  ln: string;
  age: number;
  Fullname: () => string;
  GetAge: () => number;
  Details: () => void;
}

class Emp implements Iperson {
  fn: string;
  ln: string;
  age: number;

  Fullname() {
    return `${this.fn} ${this.ln}`;
  }
  GetAge() {
    return this.age;
  }
  Details() {
    console.log(`Name:${this.fn} ${this.ln} and age:${this.age}`);
  }
  constructor(f: string, l: string, a: number) {
    this.fn = f;
    this.ln = l;
    this.age = a;
  }

  xyz() {
    console.log('hi');
  }
}
