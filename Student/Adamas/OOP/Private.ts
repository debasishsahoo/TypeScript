export {};

class Student {
  private id: number;
  private name: string;

  age: number;

  private streem: string = 'BTech-CSE';
  constructor(i: number, n: string, a: number) {
    this.id = i;
    this.name = n;
    this.age = a;
  }
  private getName(): string {
    return `The name of Student is ${this.name}`;
  }

  getAge(): number {
    return this.age + 152;
  }

  private getDetails(): void {
    console.log(
      `Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`
    );
  }

  //Inside of the Class
  getAllDetails() {
    console.log(
      `Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`
    );
    console.log(this.getName());
    this.getDetails();
  }
}

let Student1: Student = new Student(1, 'Bar', 21);

//Out side of the Class i can not Acess private properties
// Student1.getDetails();
// console.log(Student1.age);
// console.log(Student1.id);
// console.log(Student1.name);
// console.log(Student1.streem);
// console.log(Student1.getName());
// console.log(Student1.getAge());

Student1.getAllDetails();

class Srabon extends Student {
  constructor(i: number, n: string, a: number) {
    super(i, n, a);
  }
  getRavi() {
    super.getName();
  }
}

let x: Srabon = new Srabon(1, 'Srabon', 21);

console.log(x.id);

console.log(x.getName());
