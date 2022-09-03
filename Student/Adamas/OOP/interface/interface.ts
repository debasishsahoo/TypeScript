export {};

interface IPerson {
  fn: string;
  ln: string;
  sayHi: () => string;
}

//Interface Used as A Datatype
let customer: IPerson = {
  fn: `Debasish`,
  ln: `Sahoo`,
  sayHi: (): string => {
    return `HI`;
  },
};

//Interface Used as A Datatype
let employee: IPerson = {
  fn: `Ravi`,
  ln: `Sharma`,
  sayHi: (): string => {
    return `Hello`;
  },
};

console.log(`Customer Object Details`);
console.log(customer.sayHi());
console.log(customer.fn);
console.log(customer.ln);

console.log(`Employee Object Details`);
console.log(employee.sayHi());
console.log(employee.fn);
console.log(employee.ln);

//Interface Used as A Parent Class
class Abc implements IPerson {
  constructor(public fn: string, public ln: string) {}
  sayHi(): string {
    return 'HI';
  }
}

let a: Abc = new Abc('deb', 'sahoo');

interface Ravi extends IPerson {
  age: number;
}

let xyz: Ravi = {
  fn: 'deb',
  ln: 'sahoo',
  age: 34,
  sayHi: (): string => {
    return 'hi';
  },
};
