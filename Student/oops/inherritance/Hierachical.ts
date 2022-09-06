export {};

export {};
//             Parent
//               /\
//          Child1 Child2

class Parent {
  //properties
  name: string;
  age: number;
  isAdult: boolean;
  isMale: boolean;

  constructor(n: string, a: number, isa: boolean, ism: boolean) {
    this.name = n;
    this.age = a;
    this.isAdult = isa;
    this.isMale = ism;
  }
  //Methods
  getDetails() {
    return `${this.name}, ${this.age} ,${this.isAdult} ,${this.isMale}`;
  }
}

class Child1 extends Parent {
  School: string;
  constructor(n: string, a: number, isa: boolean, ism: boolean, s: string) {
    super(n, a, isa, ism);
    this.School = s;
  }
  getSchool() {
    return this.School;
  }
}

class Child2 extends Parent {
  School: string;
  constructor(n: string, a: number, isa: boolean, ism: boolean, s: string) {
    super(n, a, isa, ism);
    this.School = s;
  }
  getSchool() {
    return this.School;
  }
}
