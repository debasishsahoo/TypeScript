export {};
//Parent ->Child

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

class Child extends Parent {
  School: string;
  constructor(n: string, a: number, isa: boolean, ism: boolean, s: string) {
    super(n, a, isa, ism);
    this.School = s;
  }
  getSchool() {
    return this.School;
  }
}

let Student: Child = new Child('Deb', 34, true, true, 'SSSM');

console.log(Student.name);
console.log(Student.age);
console.log(Student.isAdult);
console.log(Student.isMale);
console.log(Student.School);

let Details: string = Student.getDetails();
console.log('Details:', Details);

let SchoolInfo: string = Student.getSchool();
console.log('SchoolInfo:', SchoolInfo);
