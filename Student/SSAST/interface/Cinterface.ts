export {};
interface IPerson {
  fn: string;
  ln: string;
  age: number;
  fullname(): string;
  getage(): number;
}

class Employee implements IPerson {
  fn: string;
  ln: string;
  age: number;
  fullname(): string {
    return this.fn + ' ' + this.ln;
  }
  getage() {
    return this.age;
  }
  constructor(f: string, l: string, a: number) {
    this.fn = f;
    this.ln = l;
    this.age = a;
  }
}

let empobj: Employee = new Employee('Arnab', 'Ghosh', 23);
console.log('fullname:', empobj.fullname());
console.log('Age:', empobj.getage());
