export {};
class Teacher {
  //Propeties or variable
  id: number;
  name: string;
  age: number;
  streem: string = 'MTech-CSE';
  Salary: number;

  //Constractor to Assign value in Variable
  constructor(i: number, n: string, a: number) {
    this.id = i;
    this.name = n;
    this.age = a;
  }
  //Methods to process the data
  getName(): string {
    return `The name of Teacher is ${this.name}`;
  }
  getAge(): number {
    return this.age + 152;
  }
  getDetails(): void {
    console.log(
      `Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`
    );
  }
}

class Student {
  //Propeties or variable
  id: number;
  name: string;
  age: number;
  streem: string = 'BTech-CSE';

  //Constractor to Assign value in Variable
  constructor(i: number, n: string, a: number) {
    this.id = i;
    this.name = n;
    this.age = a;
  }
  //Methods to process the data
  getName(): string {
    return `The name of Student is ${this.name}`;
  }
  getAge(): number {
    return this.age + 152;
  }
  getDetails(): void {
    console.log(
      `Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`
    );
  }

  getx() {}
}

let Student1: Student = new Student(1, 'Bar', 21);

Student1.getDetails();

console.log(Student1.age);
console.log(Student1.id);
console.log(Student1.name);
console.log(Student1.streem);
console.log(Student1.getName());
console.log(Student1.getAge());

//Duck type and we use this thing to Compatiable check
let Tech1: Student = new Teacher(2, 'Deb', 45);

let Tech2: Teacher = new Student(2, 'Deb', 45);
