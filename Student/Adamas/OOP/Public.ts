export {};

class Student {
  public id: number;
  public name: string;
  //Default it is Public
  age: number;
  public streem: string = 'BTech-CSE';
  constructor(i: number, n: string, a: number) {
    this.id = i;
    this.name = n;
    this.age = a;
  }
  public getName(): string {
    return `The name of Student is ${this.name}`;
  }
  //Default it is Public
  getAge(): number {
    return this.age + 152;
  }
  public getDetails(): void {
    console.log(
      `Id:${this.id} and Name:${this.name} Age:${this.age} streem:${this.streem}`
    );
  }
}

let Student1: Student = new Student(1, 'Bar', 21);

Student1.getDetails();

console.log(Student1.age);
console.log(Student1.id);
console.log(Student1.name);
console.log(Student1.streem);
console.log(Student1.getName());
console.log(Student1.getAge());
