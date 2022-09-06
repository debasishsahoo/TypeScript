export {};
//GrandParent->Parent ->Child

class GrantParent {
  id: number;
  constructor(i: number) {
    this.id = i;
  }
}

class Parent extends GrantParent {
  //properties
  name: string;
  age: number;
  isAdult: boolean;
  isMale: boolean;

  constructor(n: string, a: number, isa: boolean, ism: boolean, i: number) {
    super(i);
    this.name = n;
    this.age = a;
    this.isAdult = isa;
    this.isMale = ism;
  }
  //Methods
  getDetails() {
    return `${this.id},${this.name}, ${this.age} ,${this.isAdult} ,${this.isMale}`;
  }
}

class Child extends Parent {
  School: string;
  constructor(
    n: string,
    a: number,
    isa: boolean,
    ism: boolean,
    s: string,
    i: number
  ) {
    super(n, a, isa, ism, i);
    this.School = s;
  }
  getSchool() {
    return this.School;
  }
}

let Student: Child = new Child('Deb', 34, true, true, 'SSSM', 1);

console.log(Student.name);
console.log(Student.age);
console.log(Student.isAdult);
console.log(Student.isMale);
console.log(Student.School);

let Details: string = Student.getDetails();
console.log('Details:', Details);

let SchoolInfo: string = Student.getSchool();
console.log('SchoolInfo:', SchoolInfo);
